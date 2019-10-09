import Layout from '../components/layout'
import Link from 'next/link'
import Router from 'next/router';

const Secondpage =() => {

  return(
      <div>
       <p>Welcome to the Second page</p>
      <Link href="/" as="/">
      <a>Home page</a>
    </Link> 
    </div>
  )
  }

export default Secondpage