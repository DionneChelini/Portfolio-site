import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { getArticles } from '@/sanity/queries'
import { getArticlePage } from '@/sanity/queries'
function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug.current}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export async function generateMetadata() {
  const data = await getArticlePage()
  return {
    title: data[0].heading,
    description: data[0].paragraph,
  }
}

export default async function ArticlesIndex() {
  let articles = await getArticles()
  const data = await getArticlePage()

  return (
    <SimpleLayout title={data[0].heading} intro={data[0].paragraph}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article: any) => (
            <Article key={article.slug.current} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
