//By default, not-found is a server component. You can mark it as async to fetch and dispay data

import Link from "next/link";
export default function NotFound() {
  return (
    <section className="grid h-screen  place-content-center px-4">
      <article className="text-center">
        <h3 className="text-9xl font-black text-gray-200">404</h3>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-softRed px-5 py-3 text-sm font-medium text-white hover:bg-softOrange focus:ring focus:outline-none focus:ring-softOrange"
        >
          Go Back Home
        </Link>
      </article>
    </section>
  );
}
