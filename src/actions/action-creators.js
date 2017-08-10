import lastfmStore from '../stores/lastfmStore'

import axios from 'axios';
import {
  apiConstants
} from '../constants/api-constants';
const {
  baseURL,
  apiKey,
  userName
} = apiConstants;


export function fetchRecentTracks(limit) {
  let getRecentTracks = axios.create({
    baseURL,
    url: `?format=json&method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}`
  });
  getRecentTracks()
  .then((response) => {
    lastfmStore.addTrack(response.data.recenttracks.track)
  });
}
