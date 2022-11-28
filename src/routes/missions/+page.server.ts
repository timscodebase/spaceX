import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const query = gql`
  {
    launchesPast {
      details
      mission_name
      links {
        article_link
        video_link
        wikipedia
        mission_patch_small
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