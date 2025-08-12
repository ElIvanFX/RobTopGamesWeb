import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),
    image: z.string(),
    description: z.string(),
    author: z.string(),
    publish: z.boolean(),
    tags: z.array(z.string()).optional(),
    authorImage: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};