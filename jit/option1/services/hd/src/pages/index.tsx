import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useEffect, useState } from "react";
import {useConfig, Showcase} from "showcase";


const ShowcasePage = () => {
  const [shouldRender, setShouldRender] = useState(false);
  useConfig({
    isGraphqlEnabled: false,
  });


  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <h1>hd</h1>
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
      uri: "https://kp-graphql-api.unstable.kp.kinopoisk.ru/graphql/",
    }),
  ]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === undefined,
});


export default ShowcasePage;
