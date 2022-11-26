import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const query = gql`
  {
    ships {
      image
      missions {
        name
      }
      name
    }
  }
`;


export const load: PageServerLoad = async () => {
  const space = await request('https://api.spacex.land/graphql', query);

  return {
    space
  }
}