import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Search from '../Components/Search'


const Home: NextPage = () => {
  return (
      <div>
        <Header/>
        <Search/>
    </div>
  )
}

export default Home
