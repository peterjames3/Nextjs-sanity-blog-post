import { SanityDocument } from "@sanity/client";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Post from "@/app/components/Post";
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  const reservedRoutes = ['about', 'home'];

  return posts
    .filter((post: { slug: string }) => !reservedRoutes.includes(post.slug))
    .map((post: { slug: string }) => ({
      params: { slug: post.slug },
    }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PageProps) => {
  const { slug } = params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
};

export default PostPage;
