import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'

import { renderBlocks } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { IPage, ISeo } from '../../interfaces/pages'
import { PageType } from '../../types/common'
import { getPageData } from '../../libs/cms/queries'

import { PageProvider } from '../../context/project'

export const getServerSideProps = async ({ params, resolvedUrl }) => {
  let slug = '/'
  if (Array.isArray(params?.slug)) slug = params?.slug[0]
  const pageName = resolvedUrl.replace('/en', '')
  const data = await getPageData(!pageName ? '/' : pageName.replace('/', ''))
  let page = {}
  if (data.page) page = data.page

  return {
    props: {
      page: page,
    },
  }
}

const defaultSeo: ISeo = {
  title: 'Title',
  keywords: ['Keywords'],
  description: 'Description',
}

const DynamicPage: NextPage = ({ page }: PageType) => {
  console.log('page', page)
  const seo = page.seo || defaultSeo
  const [pageProject, setPageProject] = useState<PageType | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (page) {
      const state = {
        page: { ...page },
      }
      setPageProject(state)
    }
  }, [page])

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{seo.title || 'Title'}</title>
        <meta name="description" content={seo.description || 'Description'} />
        <meta name="keywords" content={seo.keywords.toString() || 'Keywords'}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageProvider.Provider value={pageProject}>
        <PrimaryLayout>{renderBlocks(page.blocks)}</PrimaryLayout>
      </PageProvider.Provider>
    </>
  )
}

export default DynamicPage
