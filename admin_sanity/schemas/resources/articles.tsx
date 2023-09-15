export default {
  name: 'articles',
  Title: 'Articles',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      Title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      Title: 'Slug',
      type: 'slug',
      options: {},
    },
    {
      name: 'author',
      Title: 'Author',
      type: 'reference',
      to: [{type: 'home'}],
    },
    {
      name: 'description',
      Title: 'Description',
      type: 'text',
    },

    {
      name: 'date',
      Title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'markdown',
    },
    {
      name: 'image',
      Title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
