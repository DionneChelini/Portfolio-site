import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'm9etpk3l',
  dataset: 'production',
  apiVersion: '2023-03-04',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

export default client
