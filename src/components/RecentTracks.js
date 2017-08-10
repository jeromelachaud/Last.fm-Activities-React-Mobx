import React from 'react';
import RecentTrack from './RecentTrack.js';
import { inject, observer } from 'mobx-react';
import { fetchRecentTracks } from '../actions/action-creators';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

@inject('lastfmStore')
@observer
class RecentTracks extends React.Component {

  componentWillMount() {
    fetchRecentTracks();
  }

  render() {

    const {
      lastfmStore
    } = this.props;

    const RecentTrackElement = _map(lastfmStore.recentTracks, (recentTrack, i) => (
      <RecentTrack
        key={i}
        recentTrack={recentTrack} />
    ));

    return (
      <div>
        {RecentTrackElement}
      </div>
    )
  }
}

RecentTracks.propTypes = {
  recentTracks: PropTypes.array
};

export default RecentTracks;
