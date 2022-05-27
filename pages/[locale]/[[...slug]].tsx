import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'
import type { NextPage } from 'next'
import Head from 'next/head'

import { renderBlocks } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { ISeo } from '../../interfaces/pages'
import { PageType } from '../../types/common'
import { getPageData } from '../../libs/cms/queries'

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

// export const getStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: {
//           locale: 'en',
//           slug: [''],
//         },
//       },
//       {
//         params: {
//           locale: 'en',
//           slug: ['about'],
//         },
//       },
//     ],
//     fallback: false,
//   }
// }

// export const getStaticProps = async (props) => {
//   let slug = '/'
//   if (Array.isArray(props.params?.slug)) {
//     slug = props.params?.slug[0]
//   }
//   const data = await getPageData(slug)
//   console.log('data', data)
//   let page = {}
//   if (data.page) page = data.page
//   return {
//     props: {
//       page: page,
//     },
//   }
// }

const defaultSeo: ISeo = {
  title: 'Title',
  keywords: ['Keywords'],
  description: 'Description',
}

const DynamicPage: NextPage = ({ page }: PageType) => {
  console.log(page)
  const seo = page.seo || defaultSeo
  const dispatch = useDispatch()
  dispatch(actions.set_page(page))
  const router = useRouter()

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
      <PrimaryLayout>{renderBlocks(page.blocks)}</PrimaryLayout>
    </>
  )
}

export default DynamicPage
