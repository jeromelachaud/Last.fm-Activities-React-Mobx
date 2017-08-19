import React from 'react';
import language from '../language';
import {
  TopArtistWrapper,
  TopArtistInfoWrapper,
  TopArtistInfo
} from '../styles';
import PropTypes from 'prop-types';

const topArtistLanguage = language.components.topArtist;

class TopArtist extends React.Component {

  render() {
    const {
      topArtist
    } = this.props;

    const {
      name,
      playcount,
      image,
      url
    } = topArtist;

    return (
      <TopArtistWrapper
        href={url}>
        <img
          src={image['3']['#text']}
          alt={topArtist.name}/>
        <TopArtistInfoWrapper>
          <TopArtistInfo>
            <div><strong>{name}</strong></div>
            <div><i>{playcount} {topArtistLanguage.playsKey}</i></div>
          </TopArtistInfo>
        </TopArtistInfoWrapper>
      </TopArtistWrapper>
    );
  }
}

TopArtist.propTypes = {
  topArtist: PropTypes.object
};

export default TopArtist;
