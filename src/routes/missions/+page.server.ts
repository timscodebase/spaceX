import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const query = gql`
  {
    launchesPast {
      mission_name
      launch_date_local
      links {
        article_link
        video_link
        wikipedia
        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
`;


export const load: PageServerLoad = async () => {
  const missions = await request('https://api.spacex.land/graphql', query);

  return {
    missions
  }
}