import React from "react"
import PropTypes from "prop-types"
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

const ProductsTitle = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #222222;
    text-decoration: none solid rgb(34, 34, 34);
    margin-top: 39px;
    margin-bottom: 10px;
    margin-left: 30%;
`

const Keys = ({ pageContext, data }) => {
  console.log(data);
  const { key } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout style={{width: 'fit-content(20em)'}}>
        <ProductsTitle>PRODUCTS</ProductsTitle>
        <ThumbnailsWrapper>
            {edges.map(({ node }) => (
                <div key={node.id}>
                    <ItemThumbnail exc={ node.excerpt } key={node.fields.slug} options={node.frontmatter.options} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid} active={node.frontmatter.active}/>

                </div>

            ))}
        </ThumbnailsWrapper>
    </Layout>
  )
}

export default Keys
export const pageQuery = graphql`
  query($key: String) {
    allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true }, keyword: { in: [$key] } } }) {
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