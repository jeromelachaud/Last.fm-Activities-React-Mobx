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
}

const store = new lastfmStore();
export default store;
