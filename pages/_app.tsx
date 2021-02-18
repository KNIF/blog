import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePanelbear } from '../hooks/panelbear';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Load Panelbear only once during the app lifecycle
  usePanelbear('1fceGAAxcOW', { scriptSrc: '/pb.js' });

  return <Component {...pageProps} />;
};

export default MyApp;
