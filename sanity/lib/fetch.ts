import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
  retries = 3, // Maximum number of retry attempts
  delay = 2000, // Delay between retries in milliseconds
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
  retries?: number;
  delay?: number;
}): Promise<QueryResponse> {
  const isDraftMode = (await draftMode()).isEnabled;

  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";
  let attempts = 0;

  while (attempts <= retries) {
    try {
      // Attempt to fetch the data
      return await client
        .withConfig({ useCdn: true })
        .fetch<QueryResponse>(query, params, {
          cache: isDevelopment || isDraftMode ? undefined : "force-cache",
          ...(isDraftMode && {
            token: token,
            perspective: "previewDrafts",
          }),
          next: {
            ...(isDraftMode && { revalidate: 30 }),
            tags,
          },
        });
    } catch (error) {
      attempts++;
      console.error(`Fetch attempt ${attempts} failed:`, error);

      if (attempts > retries) {
        console.error("Maximum retry attempts reached.");
   
      }

      // Delay before the next retry
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  // Fallback in case the retry loop exits unexpectedly
  throw new Error("Unexpected error: Retry loop exited improperly.");
}
