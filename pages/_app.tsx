import { AppProps } from 'next/app';
import { usePanelbear } from '../hooks/panelbear';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePanelbear('1fceGAAxcOW', { scriptSrc: '/pb.js' });

  return <Component {...pageProps} />;
};

export default MyApp;
