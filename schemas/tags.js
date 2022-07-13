import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
import sanityClient from 'part:@sanity/base/client'

export default {
  name: 'tags',
  type: 'document',
	title: 'Tags',
  fields: [
    {
      name: 'tag',
      type: 'string',
      title: 'Tag'
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
  title: 'Tag Type',
  name: 'categorySet',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    list: [
      {title: 'Client', value: 'client'},
      {title: 'Category', value: 'category'}
    ]
  }
}
  ]
}
