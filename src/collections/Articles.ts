import type { CollectionConfig } from 'payload';

export const Articles: CollectionConfig = {
  slug: 'articles',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'author', type: 'text', required: true },
    { name: 'datetime', type: 'date', required: true },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'body', // <-- This is the main article content field!
      type: 'richText',
      required: true,
      admin: {
        elements: ['h1', 'h2', 'h3', 'ul', 'ol', 'link', 'upload', 'blockquote'],
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};