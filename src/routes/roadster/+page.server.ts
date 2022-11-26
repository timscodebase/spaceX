import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const query = gql`
  {
  roadster {
    name
    speed_kph
    speed_mph
    earth_distance_km
    earth_distance_mi
    launch_date_unix
    wikipedia
    mars_distance_km
    mars_distance_mi
    details
    period_days
  }
}
`;

export const load: PageServerLoad = async () => {
  const space = await request('https://api.spacex.land/graphql', query);

  return {
    space
  }
}