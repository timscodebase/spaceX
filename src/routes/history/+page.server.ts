import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

const query = gql`
  {
    histories {
      details
      links {
        wikipedia
        article
        reddit
      }
      id
      flight {
        details
        id
        launch_date_local
        launch_site {
          site_name
        }
        launch_success
        launch_year
        links {
          article_link
          mission_patch
          video_link
          wikipedia
          flickr_images
        }
        mission_name
        telemetry {
          flight_club
        }
      }
      title
    }
  }
`;


export const load: PageServerLoad = async () => {
  const missions = await request('https://api.spacex.land/graphql', query);

  return {
    missions
  }
}