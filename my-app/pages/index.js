 import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';

function Index(){

  return(
      <Layout>
       <p>Welcome to Test APP</p>
      <Link href="secondpage" as="/secondpage">
      <a>second Page</a>
    </Link> 
  </Layout>
  )
  }

export default Index