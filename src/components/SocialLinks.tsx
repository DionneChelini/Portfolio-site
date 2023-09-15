import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import clsx from 'clsx'

export default function SocialLink({
  className,
  href,
  children,
  icon,
}: {
  className?: string
  href: string
  icon: any
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <MDXRemote source={icon} />

        <span className="ml-4">{children}</span>
      </Link>
    </div>
  )
}
