/**
 * External dependencies
 */
import type { AppProps } from 'next/app'

/**
 * Internal dependencies
 */
import '../styles/main.scss';

const MoneyTrackApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MoneyTrackApp;
