import '../styles/globals.css';
import Head from "next/head";
import { Poppins } from '@next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";

const poppins = Poppins({
  weight: ['200','400','500','600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

config.autoAddCss = false; 

function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
