import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import ItemThumbnail from "../components/itemThumbnail"
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Header} from 'semantic-ui-react'


const ThumbnailsWrapper = styled.div`
    max-width: 800px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    margin: auto;
`



export default ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <h1 class="ui center aligned header" >PRODUCTS </h1>
            <ThumbnailsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (

                <div key={node.id}>
                    <ItemThumbnail exc={ node.excerpt } key={node.fields.slug} options={node.frontmatter.options} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid} active={node.frontmatter.active} />
                </div>

            ))}
            </ThumbnailsWrapper>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        
      }
    }
    allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            price
            options
            active
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
