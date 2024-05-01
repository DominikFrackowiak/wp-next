import client from "client";
import { gql } from "@apollo/client";
import BlockRenderer from '../components/BlockRenderer/BlockRenderer'

export default function Home(props) {
  console.log(props);
  return <div>
    <BlockRenderer blocks={props.blocks}/> 
  </div>;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });
  return {
    props: {
      blocks: data.nodeByUri.blocks,
      myexampleprop: "test",
    },
  };
};
