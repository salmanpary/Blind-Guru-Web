import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from './LandingPage'

export default function Home() {
  return (
    <div className="container">
      <LandingPage/>
    </div>
  )
}
