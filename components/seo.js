import React from 'react'
import Head from 'next/head'
import { siteMetadata } from '../config'

function SEO({ description, lang, meta, keywords, title }) {
  const metaDescription = description || siteMetadata.description
  return (
    <Head>
      <html lang={lang} />
      <title>
        {title}
        {title ? ' | ' : ''}JJ's website
      </title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)
        .map((metaProps, idx) =>
          React.createElement('meta', {
            ...metaProps,
            key: idx,
          })
        )}
    </Head>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
  description: 'Personal website for JJ Kasper',
}

export default SEO
