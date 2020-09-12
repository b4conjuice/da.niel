import Link from 'next/link'

import Page from '@/components/page'
import Title from '@/components/title'
import redirects from '@/lib/redirects'

const Home = () => (
  <Page>
    <main className="flex flex-col justify-center flex-grow space-y-4">
      <Title>da.niel</Title>
      <p className="text-2xl text-center text-cobalt sm:text-3xl">
        url shortener using{' '}
        <a
          className="font-semibold hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          next.js
        </a>{' '}
        <a
          className="font-semibold hover:underline"
          href="https://nextjs.org/docs/api-reference/next.config.js/redirects"
          target="_blank"
          rel="noopener noreferrer"
        >
          redirects
        </a>
      </p>
      <ul className="space-y-2 text-xl">
        {Object.entries(redirects).map(([key, value]) => (
          <li
            key={key}
            className="flex items-center justify-center space-x-2 text-cb-dusty-blue"
          >
            <Link href={`/${key}`}>
              <a className="font-semibold hover:underline">/{key}</a>
            </Link>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href={value}
              className="font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </main>
    <footer className="pb-4 text-2xl text-center text-gray-100 bg-cobalt sm:text-3xl">
      <div className="lg:container lg:mx-auto lg:max-w-3xl">
        <div>
          built{' '}
          <a
            className="font-semibold hover:underline text-cb-yellow"
            href="https://with-bacon.niel.to"
            target="_blank"
            rel="noopener noreferrer"
          >
            with bacon{' '}
            <span role="img" aria-label="bacon">
              🥓
            </span>
          </a>
        </div>
        <ul className="flex justify-center space-x-4 text-xl">
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              next.js
            </a>
          </li>
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              tailwind.css
            </a>
          </li>
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </Page>
)

export default Home
