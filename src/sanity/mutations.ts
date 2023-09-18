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
    token:
      'skpqD73YFAN1BoPaJPXK6mOLTib7BztEhbp6dw4qVMij7FNQEuWwX00dH2s1Y73UfcaL6Kd1N8pXOUz7v2VJ2SPsQgpZ1wHUbywLkjGI0zzL49J2INtT4Fg23aRIMH21t1RfqDotTGO88XR4Y1vQDHALBIhafgeInxcqnnEBLbjTmfsFeQyg',
  })
}
