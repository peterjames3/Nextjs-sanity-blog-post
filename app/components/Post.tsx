import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';
import RecentPostsSection from '@/app/components/RecentPostsSection';

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) return <p>Loading...</p>;

  return (
    <main>
      <section className="container mx-auto mt-[8rem] prose prose-xl px-4 py-3">
        <nav className="py-2 flex items-center hover:font-semibold transition-all delay-300 text-gray-500">
          <span className="text-2xl">&larr;</span>
          <Link href="/" className="text-sm font-medium no-underline text-gray-500">
            Go Back
          </Link>
        </nav>
        <header className="text-3xl font-semibold text-gray-600">{post.title}</header>
        <div className="w-full h-[300px]">
          {post?.mainImage && (
            <Image
              src={builder.image(post.mainImage).width(1200).height(650).url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
              alt={post?.mainImage?.alt || 'Post image'}
              width={1300}
              height={650}
              className="rounded-md"
            />
          )}
        </div>

        <div className="pt-12">
          <article>
            <section className="flex gap-2">
              <div>
                {post?.authorImage && (
                  <Image
                    src={builder.image(post.authorImage).width(60).height(60).url()}
                    alt={post?.authorName || 'Author image'}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
              </div>
              <div className="flex flex-col pt-4">
                <h3 className="text-softRed text-sm">{post.categories ||"Uncategorized Post"}</h3>
                <span className="text-sm">{post.authorName ||"Unknown Author"}</span>
              </div>
            </section>
          </article>
          {post?.body && (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                  h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
                },
              }}
            />
          )}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto mt-[5rem]">
        <header className="flex justify-center items-baseline gap-10">
          <div className="text-2xl ss:text-3xl sm:text-4xl font-bold leading-tight text-center">
            Recent Posts
          </div>
          <p className="text-xl text-gray-600 font-light">Our Best Stories.</p>
        </header>
        <RecentPostsSection />
      </section>
    </main>
  );
}
