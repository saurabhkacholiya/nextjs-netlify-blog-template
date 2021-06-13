import "normalize.css";
import '@/css/tailwind.css'

// import 'tailwindcss/tailwind.css'
// import 'tailwindcss/base.css'
// import 'tailwindcss/utilities.css'
// import 'tailwindcss/components.css'
import { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

if(typeof window !== "undefined"){
  window.CMS_MANUAL_INIT = true;
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} className='prose'/>
  )
}
