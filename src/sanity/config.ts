import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'm9etpk3l',
  dataset: 'production',
  apiVersion: '2023-03-04',
  useCdn: false,
  token:
    'sk9ldfUAQYEtpSZHYQDuY67wY6ohAeGFltSELG7MwES8AGP71l9VIkDB9ptwLNejgRgIgGmyHZpcftOyOObarxXGHT5uStGraJTdbok7kBml5UMddT5E2qIrCg2LWBzwkcJrKbOhkMckIflgXJnTd5LwTUfgCDXxb9LbN3LQmvNFx2XDkKnL',
})

export default client
