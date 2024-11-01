import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			tags: z.array(z.string()),
		}),
});

const pageCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

export const collections = {
	posts: postCollection,
	pages: pageCollection,
};
