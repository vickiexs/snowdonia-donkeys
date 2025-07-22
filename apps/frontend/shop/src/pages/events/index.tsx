import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";

import { GenericObject } from "@lib/types";

import client from "../../../lib/apollo-client";

const GET_ABOUT_PAGE = gql`
  query GetEventsPage {
    eventsPage {
      heading
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  return {
    props: {
      pageData: data.eventsPage,
    },
  };
};

interface Props {
  pageData: GenericObject;
}

export default function EventsPage({ pageData }: Props) {
  console.log("data:", pageData);
  return (
    <div>
      <h1>{pageData.heading}</h1>
    </div>
  );
}
