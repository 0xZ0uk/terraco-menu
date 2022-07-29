import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { hotjar } from 'react-hotjar';

function MyApp({ Component, pageProps }: AppProps) {
  hotjar.initialize(3086572, 6)
  hotjar.identify('USER_ID', { userProperty: 'value' });
  hotjar.event('button-click');
  hotjar.stateChange('/my/page');

  return <><Component {...pageProps} /></>;
}

export default MyApp;
