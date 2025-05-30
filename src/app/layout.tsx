import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'
import { getHomePage } from '@/sanity/queries'
import { headers } from 'next/headers'
export async function generateMetadata() {
  const homePage = await getHomePage()
  return {
    title: homePage[0].name + ' | ' + homePage[0].description,
    description: homePage[0].description,
  }
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="h-full bg-zinc-50">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
