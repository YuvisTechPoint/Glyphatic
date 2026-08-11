import { defineType, defineField } from 'sanity'

export const award = defineType({
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Award Title',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'badgeImage',
      title: 'Badge Image',
      type: 'image',
    }),
    defineField({
      name: 'dateReceived',
      title: 'Date Received',
      type: 'date',
    }),
  ],
})
