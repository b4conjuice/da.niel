import Link from 'next/link'

import Page from '@/components/page'
import Title from '@/components/title'
import redirects from '@/lib/redirects'

const Home = () => (
  <Page>
    <main className="flex flex-col justify-center flex-grow space-y-4">
      <div className="flex justify-center space-x-4">
        <Title>da.niel</Title>
        <a
          className="inline-flex p-1 rounded-full text-cobalt dark:text-cb-light-blue hover:text-cb-mint"
          href="https://github.com/b4conjuice/da.niel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>GitHub</title>
            <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
          </svg>
        </a>
      </div>
      <p className="px-4 text-2xl text-center sm:text-3xl">
        <span className="font-semibold dark:text-cb-orange">url shortener</span>{' '}
        using <br className="block md:hidden" />
        <a
          className="font-semibold hover:underline dark:text-cb-light-blue"
          href="https://nextjs.org/docs/api-reference/next.config.js/redirects"
          target="_blank"
          rel="noopener noreferrer"
        >
          next.js redirects
        </a>{' '}
      </p>
      <ul className="space-y-2 text-xl">
        {Object.entries(redirects).map(([key, value]) => (
          <li
            key={key}
            className="flex items-center justify-center space-x-2 text-cb-dusty-blue dark:text-gray-100"
          >
            <Link
              className="font-semibold hover:underline dark:text-cb-mint"
              href={`/${key}`}
            >
              /{key}
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
              className="font-semibold hover:underline dark:text-cb-mint"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.replace('https://', '')}
            </a>
          </li>
        ))}
      </ul>
    </main>
    <footer className="py-4 text-2xl text-center text-gray-100 bg-cobalt dark:bg-cb-dark-blue sm:text-3xl">
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
