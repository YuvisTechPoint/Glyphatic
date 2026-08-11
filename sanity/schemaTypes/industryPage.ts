import { defineType, defineField } from 'sanity'

export const industryPage = defineType({
  name: 'industryPage',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Industry Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
  ],
})
