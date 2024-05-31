import { GraphQLClient, gql } from 'graphql-request'

// const endpoint = process.env.MY_API_ENDPOINT

export const graphcms = new GraphQLClient('ENDPOINT')

const posts = `
    id,
    title,
    slug,
    isArticle,
    coverImage { url },
`

export const QUERY_POSTS = gql`
    {
        posts(){
            slug,
            title,
            isArticle,
            coverImage{url}
        }
    }
`

export const QUERY_POST = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            id
            title
            slug
            isArticle
            coverImage { url }
            content { html }
        }
    }
`
