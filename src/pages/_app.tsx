/**
 * External dependencies
 */
import type { AppProps } from 'next/app'

/**
 * Internal dependencies
 */
import '../styles/globals.css'

const MoneyTrackApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MoneyTrackApp;
