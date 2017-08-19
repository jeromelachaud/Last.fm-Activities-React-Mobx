import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import User from './User';
import { fetchUser } from '../actions/action-creators';
import language from '../language';
import {
  UserWrapper,
  MenuWrapper,
  MenuItem,
  LinkUserWrapper
} from '../styles';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const menuLanguage = language.components.menu;
const linkStyle = css({
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1.75rem',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,1)',

  '&:hover, &:visited, &:active': {
    color: 'rgba(255,255,255,0.5)',
    transition: 'color .25s ease-in-out',
  }
})


@inject('lastfmStore')
@observer
class Menu extends React.Component {
  componentWillMount() {
    fetchUser();
  }
  debugger;

  constructor(props) {
    super(props);
    this.state = {
      showUser: false
    };
    this.toggleUser = this.toggleUser.bind(this);
  }

  render() {
    const {
      user
    } = this.props;

    let userElement;
    userElement = (
      <UserWrapper>
        <User
          user={user} />
      </UserWrapper>
    );

    return (
      <MenuWrapper>
        <MenuItem>
          <Link
            className={`${linkStyle}`}
            to="/recent-tracks">
            {menuLanguage.recentTracks}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className={`${linkStyle}`}
            to="/top-artists">
            {menuLanguage.topArtists}
          </Link>
        </MenuItem>
          <LinkUserWrapper>
            {/* <Link
              id="toggleUser"
              onClick={this.toggleUser}>
              {menuLanguage.userInfo}
            </Link> */}
          </LinkUserWrapper>
        {this.state.showUser ? userElement : null}
      </MenuWrapper>

    );
  }

  toggleUser() {
    if (!this.state.showUser) {
      this.setState({showUser : true});
    } else {
      this.setState({showUser : false});
    }
  }
}

Menu.propTypes = {
  user: PropTypes.string
};

export default Menu;
