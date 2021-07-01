import Layout from "../components/layout/Layout";
import PostPage from "./post";


export default function index() {
  return (
    <div>
      <Layout>
        <PostPage />
      </Layout>
    </div>
  )
}
