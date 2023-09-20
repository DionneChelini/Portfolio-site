import { createClient } from 'next-sanity'

type Doc = {
  _type: string
  name: string
  paragraph: string
}

export async function postNewsletterForm(doc: Doc) {
  const client = createClient({
    projectId: 'm9etpk3l',
    dataset: 'production',
    apiVersion: '2023-03-04',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
  })
}
