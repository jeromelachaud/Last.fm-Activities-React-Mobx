import {
  observable,
  action,
  computed
} from 'mobx';

class lastfmStore {
  @observable recentTracks = [];

  @action addTrack = (tracks) => {
    this.recentTracks.push(...tracks);
  }

  @computed get trackCount() {
    return this.recentTracks.length;
  }

  @observable user = '';

  @action setUser = (user) => {
    this.user = user;
  }

  @observable topArtists = [];

  @action addArtist = (artists) => {
    this.topArtists.push(...artists);
  }
}

const store = new lastfmStore();
export default store;
