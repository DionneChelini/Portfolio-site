import { ArticleLayout } from '@/components/ArticleLayout'
import { getArticle } from '@/sanity/queries'

import React from 'react'

export default async function page(props: any) {
  const article = await getArticle(props.params.articleSlug)

  return <ArticleLayout article={article[0]} {...props} />
}
