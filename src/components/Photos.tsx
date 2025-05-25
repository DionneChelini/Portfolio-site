import Image from 'next/image'
import clsx from 'clsx'
import { getHomePage } from '@/sanity/queries'

export default async function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const homePageImages = await getHomePage()

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {homePageImages &&
          homePageImages[0].pics.map((image: any, imageIndex: number) => (
            <div
              key={imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length],
              )}
            >
              {image?.asset?.url! && (
                <Image
                  src={image?.asset?.url}
                  alt="something"
                  width={100}
                  height={100}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
