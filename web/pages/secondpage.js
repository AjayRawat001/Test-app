import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router';

const Secondpage =() => {

  return(
      <Layout>
       <p>Welcome to the Second page</p>
      <Link href="/" as="/">
      <a>Home page</a>
    </Link> 
  </Layout>
  )
  }

export default Secondpage