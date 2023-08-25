import {ApolloClient} from '@apollo/client';
import {ShowCaseDocument} from '../graphql/showcase.generated';

export const fetchAndCacheShowcase = ({apolloClient}: {apolloClient: ApolloClient<object>}) => {
    return apolloClient.query({query: ShowCaseDocument})
}