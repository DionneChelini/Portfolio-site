'use client'

import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about."
    >
      <Link
        href="/"
        className="group mb-8 flex w-96 items-center justify-center rounded-full bg-white p-6 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700  dark:hover:ring-white/20 lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
      >
        <ArrowLeftIcon className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        <p className="text-grey-800">Go back to Homepage</p>
      </Link>
    </SimpleLayout>
  )
}
