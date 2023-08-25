import { ShowcaseTitle } from "@/ui/showcase-title/component";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Link from "next/link";
import getConfig from "next/config";
import { useEffect, useState } from "react";
import {useConfig, Showcase} from "showcase";


const ShowcasePage = () => {
  const [shouldRender, setShouldRender] = useState(false);
  useConfig({
    secret: getConfig().serverRuntimeConfig.secret,
    isGraphqlEnabled: false,
    routeRerenderers: {
      selections: ({ children, className, selectionId }) => (
        <Link className={className} href={`/selections/${selectionId}`}>
          {children}
        </Link>
      ),
    },
    uiRerenderers: {ShowcaseTitle}
  });


  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <h1>Kinopoisk</h1>
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
