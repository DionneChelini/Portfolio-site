import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getSpeakingPage, getSpeaking } from '@/sanity/queries'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export async function generateMetadata() {
  const data = await getSpeakingPage()
  return {
    title: data[0].heading,
    description: data[0].paragraph,
  }
}
export default async function Speaking() {
  const data = await getSpeakingPage()
  const speaking = await getSpeaking()

  return (
    <SimpleLayout title={data[0].heading} intro={data[0].paragraph}>
      <div className="space-y-20">
        {speaking.map((section: any) => (
          <SpeakingSection title={section.title} key={section.title}>
            {section.appearances.map((appearance: any) => (
              <Appearance
                event={appearance.event}
                key={appearance.title}
                href={appearance.href}
                title={appearance.title}
                description={appearance.description}
                cta={appearance.cta}
              />
            ))}
          </SpeakingSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
