import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralState from '../state/general/general.state'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'

const Home: NextPage = () => {
  return (
    <>
    <GeneralState>
      <Dashboard/>
    </GeneralState>
    </>
  )
}

export default Home
