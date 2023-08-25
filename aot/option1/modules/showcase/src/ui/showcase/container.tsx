import React, { useEffect } from "react";
import { useApolloClient, useQuery, gql } from "@apollo/client";
import { ShowCaseDocument } from "../../graphql/showcase.generated";
import { getConfig } from "../../config/module-config";

export const Showcase = () => {
  const { data } = useQuery(ShowCaseDocument, { fetchPolicy: "cache-first" });

  const { selections: LinkToSelection } = getConfig().routeRerenderers;

  const {ShowcaseTitle} = getConfig().uiRerenderers

  const [firstShowcase] = data?.showcase?.content?.items || [];
  const firstItems = firstShowcase?.content?.items ?? [];

  return (
    <>
     <ShowcaseTitle>Showcase page</ShowcaseTitle>
      <ul>
        {firstItems?.map((item) => (
          <li key={item?.movie?.contentId}>
            <LinkToSelection selectionId={item?.movie?.contentId} className="">
              {item?.movie?.title?.localized}
            </LinkToSelection>
          </li>
        ))}
      </ul>
    </>
  );
};
