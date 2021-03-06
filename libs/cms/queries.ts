import { request, gql, GraphQLClient } from 'graphql-request'

export async function getPageData(page: string) {
  const url = 'https://api-eu-west-2.graphcms.com/v2/cl308wjdo09nt01xq5d4o2wr4/master'
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  const pageData = page === '/' ? 'home' : page

  const query = gql`
    query PAGE_DATA($page: String) {
      page(where: { slug: $page }) {
        id
        slug
        title
        seo {
          id
          keywords
          title
          description
        }
        blocks {
          ... on BlockHero {
            id
            slug
            subheading
            heading {
              html
            }
            image {
              id
              url
            }
          }
          ... on BlockBenefit {
            id
            slug
            items {
              id
              heading
              subheading
              image {
                id
                url
              }
            }
          }
          ... on BlockTestimonial {
            id
            slug
            items {
              id
              text
              author
            }
          }
          ... on BlockIntroBanner {
            id
            slug
            heading
            image {
              id
              url
            }
          }
          ... on BlockAbout {
            id
            slug
            subheading
            heading
            image {
              id
              url
            }
          }
        }
        blockFooter {
          id
          slug
          image {
            id
            url
          }
          internalLink
          text
          socialsHeading
          socials {
            id
            heading
            socialIcon
            externalLink
          }
          navigation {
            id
            slug
            title
            pages {
              id
              slug
              title
            }
          }
        }
        blockHeader {
          id
          image {
            id
            url
          }
          slug
          navigation {
            id
            slug
            title
            pages {
              id
              slug
              title
            }
          }
        }
      }
    }
  `

  const data = await graphQLClient.request(query, {
    page: pageData,
  })
  return data
}
