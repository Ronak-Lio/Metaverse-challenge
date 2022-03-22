import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import {useMoralis} from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'

const Home: NextPage = () => {
  const {isAuthenticated , logout} = useMoralis();

  if(!isAuthenticated) return <Login/>
  return (
    <div className="h-screen overflow-y-scroll 
     bg-gradient-to-b from-black to-fuchsia-900
     overflow-hidden
    ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className = 'h-screen'>
         <div className="max-w-screen-xl mx-auto">
           {/* Header */}
           <Header/>
           <Messages/>
         </div>
       </div>
    </div>
  )
}

export default Home
