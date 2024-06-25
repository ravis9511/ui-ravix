import { z, defineCollection } from "astro:content";

const componentCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    type: z.string(),
    description : z.string().optional(),
    tags: z.array(z.string()).optional(),
    keywords : z.string().optional(),
  }),
});

export const collections = {
  components: componentCollection,
};
