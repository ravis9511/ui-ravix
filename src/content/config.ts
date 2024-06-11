import { z, defineCollection } from "astro:content";

const componentCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    type: z.string(),
  }),
});

export const collections = {
  components: componentCollection,
};
