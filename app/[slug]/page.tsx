import { SanityDocument } from "@sanity/client";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Post from "@/app/components/Post";
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

// Set revalidation interval for ISR
export const revalidate = 60;

// Use generateStaticParams to define paths for static generation
export async function generateStaticParams() {

  const posts = await client.fetch(postPathsQuery);

  const reservedRoutes = ['about', 'contact', 'home'];
  return posts.filter((post: { slug: string }) => !reservedRoutes.includes(post.slug));
}

// Server Component to fetch and render the post data based on slug
const PostPage = async ({ params } :{params:string}) => {
  const { slug } =  await params;

 
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  // Fallback rendering if post data is missing
  if (!post) {
    notFound()
  }


  return <Post post={post} />;
};

export default PostPage;