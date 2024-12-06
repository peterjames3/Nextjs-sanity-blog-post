
import Link from 'next/link';
import type { SanityDocument } from '@sanity/client';
import { format } from 'date-fns';

export default function RecentPostDetails({latestPosts = []} : {latestPosts: SanityDocument[]})  {
       
    return (
        <section className="flex flex-col space-y-5 p-2 pt-2">
            {latestPosts.slice(0, 4).map((post) => (
                <Link href={post.slug.current || "#"}
                    key={post._id}
                    className="border-l-4 border-gray-400 px-3 py-5 rounded-md flex flex-col gap-2 hover:cursor-pointer hover:shadow-lg transition-all delay-300"
                >
                    <header className=" line-clamp-2 text-[1.1rem] sm:text-xl font-medium text-gray-700">
                        {post.title || "Untitled Post"}
                    </header>
                    <footer className="flex justify-between items-center">
                        <address className="text-gray-500 font-medium not-italic">
                            {post.authorName || "Unknown author"}
                        </address>
                        <time>
                             {/* Format the date using date-fns */}
                            {format(new Date(post._createdAt), 'MMMM dd, yyyy') || "Unknown date"}
                        </time>
                    </footer>
                </Link>
            ))}
        </section>
    );
}
