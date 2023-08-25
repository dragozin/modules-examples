"use client";
import { Showcase, useConfig } from "@kp-modules/showcase";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Link from "next/link";
import { SelectionsLink } from "@/ui/selections-link/component";


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

export default function Home() {
  useConfig({
    isGraphqlEnabled: false,
    routeRerenderers: {
      selections: SelectionsLink,
    },
  });
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => setShouldRender(true), [setShouldRender]);
  if (!shouldRender) {
    return;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <main>
        <Showcase />
      </main>
    </ApolloProvider>
  );
}
