import React, { useEffect } from "react";
import { useApolloClient, useQuery, gql } from "@apollo/client";
import Link from 'next/link';
import { ShowCaseDocument } from "../../graphql/showcase.generated";
import {getConfig} from '../../config/module-config'

export const Showcase = () => {
  const { data } = useQuery(ShowCaseDocument, { fetchPolicy: "cache-first" });

  const {uiRerenderers: {ShowcaseTitle}, routesConfig: {selections}} = getConfig()
  console.log(selections);

  const [firstShowcase] = data?.showcase?.content?.items || [];
  const firstItems = firstShowcase?.content?.items ?? [];

  return (
    <>
     <ShowcaseTitle>Showcase page</ShowcaseTitle>
      <ul>
        {firstItems?.map((item) => (
          <li key={item?.movie?.contentId}>
            <Link href={selections({selectionId: item?.movie?.contentId}).href}>
              {item?.movie?.title?.localized}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
