import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
// important imports for swiper slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
