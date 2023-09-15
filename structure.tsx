import { StructureBuilder } from 'sanity/desk'
const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .showIcons(true)
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              // Panel for Home category
              S.listItem()
                .title('Home Page')
                .child(
                  S.documentTypeList('home')
                    .title('Home Page')
                    .filter('_type == "home"'),
                ),
              // Panel for About category
              S.listItem()
                .title('About Page')
                .child(
                  S.documentTypeList('about')
                    .title('About Page')
                    .filter('_type == "about"'),
                ),
              // Panel for Articles category
              S.listItem()
                .title('Article Page')
                .child(
                  S.documentTypeList('articlePage')
                    .title('Article Page')
                    .filter('_type == "articlePage"'),
                ),
              // Panel for Projects category
              S.listItem()
                .title('Project Page')
                .child(
                  S.documentTypeList('projectPage')
                    .title('Project Page')
                    .filter('_type == "projectPage"'),
                ),
              // Panel for Speaking category
              S.listItem()
                .title('Speaking Page')
                .child(
                  S.documentTypeList('speakingPage')
                    .title('Speaking Page')
                    .filter('_type == "speakingPage"'),
                ),
              // Panel for Uses category
              S.listItem()
                .title('Uses Page')
                .child(
                  S.documentTypeList('usesPage')
                    .title('Uses Page')
                    .filter('_type == "usesPage"'),
                ),

              // You can add more categories here as needed
            ]),
        ),
      S.listItem()
        .title('Resources')
        .child(
          S.list()
            .title('Pages')
            .items([
              // Panel for Articles
              S.listItem()
                .title('Articles')
                .child(
                  S.documentTypeList('articles')
                    .title('Articles')
                    .filter('_type == "articles"'),
                ),
              S.listItem()
                .title('Projects')
                .child(
                  S.documentTypeList('projects')
                    .title('Projects')
                    .filter('_type == "projects"'),
                ),
              S.listItem()
                .title('Speaking')
                .child(
                  S.documentTypeList('speaking')
                    .title('Speaking')
                    .filter('_type == "speaking"'),
                ),
              S.listItem()
                .title('Uses')
                .child(
                  S.documentTypeList('uses')
                    .title('Uses')
                    .filter('_type == "uses"'),
                ),

              // You can add more categories here as needed
            ]),
        ),
      S.listItem().title('Subscribers').child(
        S.documentTypeList('subscribers')
          .title('Email Subscribers')
          .filter('_type == "subscribers"'),

        // You can add more categories here as needed
      ),
      S.divider(),
      // New panel for Sitemap
      S.listItem()
        .title('Sitemap')
        .child(
          S.editor().id('sitemap').schemaType('sitemap').documentId('sitemap'),
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              // Panel for About category
              S.listItem()
                .title('About')
                .child(
                  S.documentTypeList('about')
                    .title('About Page')
                    .filter('_type == "about"'),
                ),

              // You can add more categories here as needed
            ]),
        ),
    ])

export default structure
