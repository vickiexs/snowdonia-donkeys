import { gql } from "@apollo/client";
import { GetStaticProps } from "next";

import { GenericObject } from "@lib/types";

import client from "../../lib/apollo-client";

// Define the GraphQL query to fetch the "Heading" field from the "About Page" type
const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    aboutPage {
      heading
    }
  }
`;

// Fetch static props using getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  console.log("DATA:", data.aboutPage);

  return {
    props: {
      pageData: data.aboutPage,
    },
  };
};

interface Props {
  pageData: GenericObject;
}

export default function About({ pageData }: Props) {
  console.log("data:", pageData);
  return (
    <div>
      <h1>{pageData.heading}</h1>
    </div>
  );
}
