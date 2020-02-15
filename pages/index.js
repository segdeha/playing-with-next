import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function Index() {
    const router = useRouter();

console.log(router)

    return (
      <Layout>
        <h1>{router.query.title}</h1>
        <p>Hello Next.js</p>
      </Layout>
    );
  }
  