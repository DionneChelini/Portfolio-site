export default {
  name: 'home',
  Title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'name',
      Title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      Title: 'Email',
      type: 'string',
    },
    {
      name: 'description',
      Title: 'Description',
      description: 'Displays main heading on home page',

      type: 'string',
    },
    {
      name: 'bio',
      Title: 'Bio',
      description: 'Displays paragraph text on home page',

      type: 'text',
    },
    {
      name: 'image',
      Title: 'Image',
      description: 'Displays image of site owner on home page',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'accounts',
      title: 'Social Media Accounts',
      type: 'array',
      description: 'Displays social medai icons on home page',

      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Social Media Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Github', value: 'github'},
                  {title: 'Gitlab', value: 'gitlab'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Twitter', value: 'twitter'},
                  // Add more social media platforms as needed
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Social Media Icon',
              type: 'image',
            },
            {
              name: 'content',
              title: 'Social Media Svg',
              type: 'markdown',
            },
          ],
        },
      ],
    },
    {
      name: 'pics',
      title: 'Homepage Gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'work',
      title: 'Work',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
            },
            {
              name: 'start',
              title: 'Start Year',
              type: 'string', // You can use 'number' if you prefer
            },
            {
              name: 'end',
              title: 'End Year',
              type: 'string', // You can use 'number' if you prefer
            },
          ],
        },
      ],
    },
    {
      name: 'resume',
      Title: 'Resume',
      description: 'Allows visitors to download your resume from the website home page',

      type: 'file',
    },
  ],
}
