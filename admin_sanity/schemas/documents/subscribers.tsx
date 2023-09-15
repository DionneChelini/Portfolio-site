export default {
  name: 'subscribers',
  Title: 'Subscribers',
  type: 'document',
  fields: [
    {
      name: 'email',
      Title: 'Email',
      type: 'string',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'date',
    },
  ],

  preview: {
    select: {
      email: 'email',
      createdAt: 'createdAt',
    },
    prepare(selection: any) {
      const {email, createdAt} = selection
      const formattedDate = new Date(createdAt).toLocaleString()

      return {
        title: `Email: ${email || 'No email'}`,
        subtitle: `Created At: ${formattedDate}`,
      }
    },
  },
}
