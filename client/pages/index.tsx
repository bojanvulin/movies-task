import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>IMDB - Home</title>
                <meta name="description" content="IMDB home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <h1>Home page</h1>
            </main>
        </>
    )
}

export default HomePage
