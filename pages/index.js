// import Layout from "../components/layout/Layout";
import PostPage from "./post";

const DUMMY_POSTS = [
  {
      id: 3,
      title: "first title",
      description: "this is the first description........."
  },
  {
      id: 4,
      title: "second title",
      description: "this is the second description........."
  }
];

export default function index(props) {
  return (
        <PostPage 
          posts={props.post}
        />
  )
}

export async function getStaticProps(context) {
  console.log("hello from get static props", context);
  return {
      props: {
          post: DUMMY_POSTS
      }
  };
}
