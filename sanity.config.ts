import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { markdownSchema } from 'sanity-plugin-markdown'
import imageUrlBuilder from '@sanity/image-url'

//pages
import homePage from './admin_sanity/schemas/pages/home'
import aboutPage from './admin_sanity/schemas/pages/about'
import articlePage from './admin_sanity/schemas/pages/article'
import projectPage from './admin_sanity/schemas/pages/project'
import speakingPage from './admin_sanity/schemas/pages/speaking'
import usesPage from './admin_sanity/schemas/pages/uses'
//resources
import articles from './admin_sanity/schemas/resources/articles'
import projects from './admin_sanity/schemas/resources/projects'
import speaking from './admin_sanity/schemas/resources/speaking'
import uses from './admin_sanity/schemas/resources/uses'
//docs
import subscribers from './admin_sanity/schemas/documents/subscribers'
import sitemap from './admin_sanity/schemas/documents/sitemap'
import structure from './structure'

//config
const config = defineConfig({
  projectId: 'm9etpk3l',
  dataset: 'production',
  title: 'My Portfolio Site',
  apiVersion: '2023-03-04',
  basePath: '/admin',
  useCdn: false,
  plugins: [deskTool({ structure }), visionTool(), markdownSchema()],
  schema: {
    types: [
      homePage,
      aboutPage,
      articlePage,
      projectPage,
      speakingPage,
      usesPage,
      articles,
      subscribers,
      projects,
      speaking,
      uses,
      sitemap,
    ],
  },
})

const builder = imageUrlBuilder(config)

export function urlFor(source: any) {
  return builder.image(source)
}

export default config
