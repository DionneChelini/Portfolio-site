import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col text-center sm:text-left ">
              <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-left sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>

            <Prose className="mt-8" data-mdx-content>
              <MDXRemote source={article.content} />
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
