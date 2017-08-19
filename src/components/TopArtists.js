import React from 'react';
import { inject, observer } from 'mobx-react';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';
import { fetchTopArtists } from '../actions/action-creators';
import { TopArtistsWrapper } from '../styles';

import PropTypes from 'prop-types';

@inject('lastfmStore')
@observer
class TopArtists extends React.Component {
  componentWillMount() {
    fetchTopArtists();
  }

  render() {
    const {
      lastfmStore
    } = this.props;

    const TopArtistElement = _map(lastfmStore.topArtists, (topArtist, i) => (
      <TopArtist
        key={i}
        topArtist={topArtist} />
    ));

    return (
    <TopArtistsWrapper>
      {TopArtistElement}
    </TopArtistsWrapper>
    );
  }
}

TopArtists.propTypes = {
  topArtists: PropTypes.array
};

export default TopArtists;
