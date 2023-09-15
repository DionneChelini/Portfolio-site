// schemas/speakingSection.js

export default {
  name: 'speaking',
  title: 'Speaking Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'appearances',
      title: 'Appearances',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'event',
              title: 'Event',
              type: 'string',
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Href',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
