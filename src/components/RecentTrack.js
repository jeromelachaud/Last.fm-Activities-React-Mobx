import React from 'react';
import lastfm_placeholder from '../assets/cover-album-placeholder.svg';
import PropTypes from 'prop-types';
import {
  RecentTrackLink,
  RecentTrackImage,
  RecentTrackInfoList,
  RecentTrackDate
} from '../styles';

class RecentTrack extends React.Component {

  render() {
    const {
      recentTrack
    } = this.props;

    const {
      artist,
      album,
      date,
      image,
      name,
      url
    } = recentTrack;

    const imageApiResponse = image['3']['#text'];

    let dateElement;
    if (date) {
      dateElement = (
        <RecentTrackDate>{date['#text']}</RecentTrackDate>
      );
    }
    let imageSource;
    if (imageApiResponse.length !== 0) {
      imageSource = (imageApiResponse);
    } else {
      imageSource = (lastfm_placeholder);
    }

    return (
      <RecentTrackLink
        href={url}>
        <RecentTrackImage
          src={imageSource}
          alt={name} />
        <RecentTrackInfoList>
          <li><strong>{artist['#text']}</strong></li>
          <li>{name}</li>
          <li><em>{album['#text']}</em></li>
          {dateElement}
        </RecentTrackInfoList>
      </RecentTrackLink>
    );
  }
}

RecentTrack.propTypes = {
  recentTrack: PropTypes.object.isRequired
};

export default RecentTrack;
