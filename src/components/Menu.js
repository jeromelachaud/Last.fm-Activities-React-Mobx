import React from 'react';
import { inject, observer } from 'mobx-react';
import User from './User';
import { Link } from 'react-router-dom';
import language from '../language';
import {
  TopBarWrapper,
  LogoWrapper,
  UserWrapper,
  MenuWrapper,
  MenuItem,
  LinkUserWrapper
} from '../styles';
import {
  fetchUser
} from '../actions/action-creators';
import PropTypes from 'prop-types';

const menuLanguage = language.components.menu;

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
            to="recent-tracks">
            {menuLanguage.recentTracks}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="top-artists">
            {menuLanguage.topArtists}
          </Link>
        </MenuItem>
          <LinkUserWrapper>
            <Link
              id="toggleUser"
              onClick={this.toggleUser}>
              {menuLanguage.userInfo}
            </Link>
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
