import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { renderByContentType, renderBlocks } from '../../components'

import { IPage } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
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

const DynamicPage: NextPage = ({ page }: IPage) => {
  console.log(page)
  const seo = page.seo
  const header = renderByContentType(Block.BlockHeader)
  const footer = renderByContentType(Block.BlockFooter)
  return (
    <div id="wrapper">
      <Head>
        {/* <title>{seo.title}</title> */}
        {/* <meta name="description" content={seo.description} /> */}
        {/* <meta name="keywords" content={seo.keywords.toString()}></meta> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {header}
      <main className="main">{renderBlocks(page.blocks)}</main>
      {footer}
    </div>
  )
}

export default DynamicPage
