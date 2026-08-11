import { defineType, defineField } from 'sanity'

export const customerStory = defineType({
  name: 'customerStory',
  title: 'Customer Story',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'companyName' },
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
  ],
})
