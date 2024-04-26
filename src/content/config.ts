import { z, defineCollection } from "astro:content"


const componentCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
})


export const collections = {
    components: componentCollection,
}
