import { request, gql, GraphQLClient } from 'graphql-request'

export async function getPageData() {
  const url = 'https://api-eu-west-2.graphcms.com/v2/cl308wjdo09nt01xq5d4o2wr4/master'
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  const query = gql`
    query PAGE_DATA {
      pages(where: { slug: "home" }) {
        id
        slug
        title
        hero {
          id
          slug
          subheading
          image {
            id
            url
          }
          heading {
            html
          }
        }
        footer {
          id
          title
          socials {
            id
            href
            title
            socialIcon
          }
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
        seo {
          id
          keywords
          title
          description
        }
      }
    }
  `

  const data = await graphQLClient.request(query)
  return data
}

// query MyQuery {
//     pages(where: {slug: "home"}) {
//       id
//       slug
//       title
//       hero {
//         id
//         slug
//         subheading
//         image {
//           id
//           url
//         }
//         heading {
//           html
//         }
//       }
//       footer {
//         id
//         title
//         socials {
//           id
//           href
//           title
//           socialIcon
//         }
//       }
//       navigation {
//         id
//         slug
//         title
//         pages {
//           id
//           slug
//           title
//         }
//       }
//       seo {
//         id
//         keywords
//         title
//         description
//       }
//     }
//   }
