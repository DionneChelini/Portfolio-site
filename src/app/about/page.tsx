import Image from 'next/image'
import { getAbout } from '@/sanity/queries'
import { Container } from '@/components/Container'
import { getHomePage } from '@/sanity/queries'
import SocialLink from '@/components/SocialLinks'
function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export async function generateMetadata() {
  const homePageData = await getHomePage()
  return {
    title: homePageData[0].name + ' | ' + homePageData[0].description,
    description: homePageData[0].description,
  }
}

export default async function About() {
  const about = await getAbout()
  const homePageData = await getHomePage()
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={about[0].image.asset.url}
              alt=""
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {about[0].heading}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {about[0].aboutProfile.map((item: any, i: number) => (
              <p key={i}>{item.children[0].text}</p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {homePageData[0].accounts.map((item: any, i: number) => (
              <SocialLink
                href={item.url}
                icon={item.content}
                className="mt-4"
                key={item.url}
              >
                Follow on{' '}
                {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
              </SocialLink>
            ))}

            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {homePageData[0].email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
