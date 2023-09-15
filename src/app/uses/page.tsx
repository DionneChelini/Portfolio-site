import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getUsesPage, getUses } from '@/sanity/queries'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export async function generateMetadata() {
  const data = await getUsesPage()
  return {
    title: data[0].heading,
    description: data[0].paragraph,
  }
}
export default async function Uses() {
  const data = await getUsesPage()
  const uses = await getUses()

  return (
    <SimpleLayout title={data[0].heading} intro={data[0].paragraph}>
      <div className="space-y-20">
        {uses.map((section: any) => (
          <ToolsSection title={section.title} key={section.title}>
            {section.tools.map((tool: any) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
