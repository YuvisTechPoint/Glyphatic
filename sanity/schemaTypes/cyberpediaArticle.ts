import { defineType, defineField } from 'sanity'

export const cyberpediaArticle = defineType({
  name: 'cyberpediaArticle',
  title: 'Cyberpedia Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Term or Topic',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'blockContent',
    }),
  ],
})
