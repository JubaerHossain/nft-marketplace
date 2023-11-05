import '../styles/main.scss'
import type { AppProps } from 'next/app'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'react-tabs/style/react-tabs.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
