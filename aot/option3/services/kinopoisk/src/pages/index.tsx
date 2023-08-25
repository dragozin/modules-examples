import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  Showcase,
  useConfig,
} from "@kp-modules/showcase";
import getConfig from "next/config";
import { useEffect, useState } from "react";

const ShowcasePage = () => {
  useConfig({
    secret: getConfig().serverRuntimeConfig.secret,
    isGraphqlEnabled: false,
    routesConfig: {selections: ({selectionId}) => ({
      href: `/selections/${selectionId}`,
      isExternal: false,
    })}
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <main>
        <Showcase />
      </main>
    </ApolloProvider>
  );
};

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    setContext((_, { headers }) => ({
      headers: { headers, "service-id": "25" },
    })),
    new HttpLink({
      uri: "https://graphql.kinopoisk.ru/graphql/",
    }),
  ]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === undefined,
});

export default ShowcasePage;
