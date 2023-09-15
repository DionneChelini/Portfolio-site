'use client'
import clsx from 'clsx'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import client from '@/sanity/config'
import ReactLoading from 'react-loading'
import { useState } from 'react'
import { FormStatus } from 'react-dom'
const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

export default function Newsletter() {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    console.log('Firing off newsletter subscription')
    try {
      const formData = new FormData(event.currentTarget)
      let doc = {
        _type: 'subscribers',
        email: formData.get('email'),
      }
      await client.create(doc)
      setLoading(false)
      router.push('/thank-you')
    } catch (err) {
      console.log(err)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          disabled={loading}
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'ml-2 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm outline-offset-2 transition active:transition-none',
            variantStyles['primary'],
          )}
        >
          {loading ? (
            <ReactLoading
              type={'spin'}
              color={'#fff'}
              height={22}
              width={22}
              className="h-6 w-6 overflow-hidden"
            />
          ) : (
            <p>Join</p>
          )}
        </button>
      </div>
    </form>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
