import client from './config'

export async function getHomePage() {
  return client.fetch(
    '*[_type == "home"] {image, bio, description, name, email, resume {asset -> { _id, url}}, pics[] {asset -> {_id,url}}, work[] {company, title, logo {  asset -> { _id, url}}, start, end} ,accounts[] {url, platform, content, icon { asset -> {_id,url}}}}',
  )
}

export async function getAbout() {
  return client.fetch(
    '*[_type == "about"] {image {asset -> {_id,url}}, heading,  aboutProfile[] {_type,children }}',
  )
}

export async function getArticlePage() {
  return client.fetch('*[_type == "articlePage"] {heading, paragraph}')
}
export async function getProjectPage() {
  return client.fetch('*[_type == "projectPage"] {heading, paragraph}')
}
export async function getSpeakingPage() {
  return client.fetch('*[_type == "speakingPage"] {heading, paragraph}')
}
export async function getUsesPage() {
  return client.fetch('*[_type == "usesPage"] {heading, paragraph}')
}
export async function getArticles() {
  return client.fetch(
    '*[_type == "articles"] {slug, title, description, date, author, content}',
  )
}
export async function getArticle(slug: string) {
  return client.fetch(`*[_type == "articles" && slug.current == $slug]`, {
    slug,
  })
}
export async function getProjects() {
  return client.fetch(
    '*[_type == "projects"] {name, description, link {href, label}, label, logo {asset -> {_id,url}}}',
  )
}
export async function getSpeaking() {
  return client.fetch(
    '*[_type == "speaking"] {title, appearances[] {description, href, event, title, cta}}',
  )
}
export async function getUses() {
  return client.fetch(
    '*[_type == "uses"] {title, tools[] {description, title}}',
  )
}
