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

export function fetchUser() {
  let getUserInfo = axios.create({
    baseURL,
    url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
  });
  getUserInfo()
  .then((response) => {
    lastfmStore.setUser(response.data.user.name)
  });
}

export function fetchTopArtists() {
  let getTopArtists = axios.create({
    baseURL,
    url: `?format=json&method=user.gettopartists&user=${userName}&api_key=${apiKey}`
  });
  getTopArtists()
  .then((response) => {
    lastfmStore.addArtist(response.data.topartists.artist)
  });
}
