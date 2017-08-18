import React from 'react';
import { inject, observer } from 'mobx-react';
import Menu from './Menu';
import Logo from './Logo';
import {
  TopBarWrapper,
  LogoWrapper
} from '../styles';

class TopBar extends React.Component {
  render() {
    return (
      <TopBarWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Menu />
      </TopBarWrapper>
    );
  }
}

export default TopBar;
