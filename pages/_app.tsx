import "@/styles/global.css";

import Layout from '@/components/Layout';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";



export default function App({ Component, pageProps } : AppProps ) {

    const [queryClient] = useState(()=> new QueryClient());

    return (
      <>

        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider >
        </Layout>

      </>
    );
  }