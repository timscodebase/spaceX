import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const launchNextQuery = gql`
  {
    launchNext {
      details
      links {
        mission_patch
      }
    }
  }
`;

const payloadQuery = gql`
  {
    payloads {
      id
      customers
    }
  }
`;

let uniq = a => [...new Set(a)];


export const load: PageServerLoad = async () => {
  const nextLaunch = await request('https://api.spacex.land/graphql', launchNextQuery);

  const payload = await request('https://api.spacex.land/graphql', payloadQuery);

  const customers = payload.payloads.map((p) => p.customers).flat();
  const uniqueCustomers = uniq(customers);
  
  return {
    nextLaunch,
    uniqueCustomers
  }
}