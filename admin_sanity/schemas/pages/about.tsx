export default {
  name: 'about',
  Title: 'About',

  type: 'document',
  fields: [
    {
      name: 'heading',
      Title: 'Heading',
      type: 'string',
    },
    {
      name: 'aboutProfile',
      Title: 'About Profile',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      Title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'accounts',
      title: 'Social Media Accounts',
      type: 'array',
      description: 'Reference social media accounts from the Home schema',
      of: [
        {
          type: 'reference',
          to: [{type: 'home'}], // Reference to the Home schema
        },
      ],
    },
  ],
}
