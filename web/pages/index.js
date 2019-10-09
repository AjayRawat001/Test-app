 import Layout from '../components/layout';
import Link from 'next/link';
import Router from 'next/router';

function Index(){

  return(
     <div>
       <p>Welcome to Test APP</p>
      <Link href="secondpage" as="/secondpage">
      <a>second Page</a>
    </Link> 
    </div>
  )
  }

export default Index