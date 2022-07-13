import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
import sanityClient from 'part:@sanity/base/client'

export default {
  name: 'photography',
  type: 'document',
	title: 'Photography',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
      isUnique: isUniqueAcrossAllDocuments,
      source: 'title',
      maxLength: 200, // will be ignored if slugify is set
      slugify: input => input
                           .toLowerCase()
                           .replace(/\s+/g, '-')
                           .slice(0, 200)
      }
  },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true,
      }
    },
    {
  title: 'Tags',
  name: 'tags',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'tags'}      ]
    }
  ]
}

  ]
}
