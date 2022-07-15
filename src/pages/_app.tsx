import "antd/dist/antd.css";
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Content style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}

export default MyApp
