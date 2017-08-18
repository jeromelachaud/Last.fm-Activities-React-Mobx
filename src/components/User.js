import React from 'react';
import moment from 'moment';
import colorVariables from '../constants/styles-variables';
import PropTypes from 'prop-types';
import {
  UserLink,
  UserInfo
} from '../styles';
const {
  darkGrey
} = colorVariables;

class User extends React.Component {
  render() {
    const {
      user
    } = this.props;

    const {
      image,
      name,
      playcount,
      registered,
      url
    } = user;

    const registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');

    return (
      <UserLink
        href={url} target="_blank">
        <div>
          <img
            src={image['3']['#text']}
            alt={name} />
        </div>
        <UserInfo>
          <li>{name}</li>
          <li>{playcount}</li>
          <li>{registeredElement}</li>
        </UserInfo>
      </UserLink>
    );
  }
}

User.propTypes = {
  user: PropTypes.string
};

export default User;
