import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from "react-moralis" 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId = '3L4DzyYLDOjwQ73AhutvOqYOZ49WOe8cJlJgFdnF'
      serverUrl  = "https://boh2wtpnxvbh.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
