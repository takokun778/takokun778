import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <footer>
      &copy; 2023 takokun778. All rights reserved.
    </footer>
  </>
}
