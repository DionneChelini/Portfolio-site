// schemas/project.js

export default {
  name: 'projects',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'href',
          title: 'Href',
          type: 'url',
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
