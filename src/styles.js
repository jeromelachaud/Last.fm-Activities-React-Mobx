// import { css } from 'glamor';
import glamorous from 'glamorous';
import colorVariables from './constants/styles-variables';
const { darkGrey } = colorVariables;

export const StyledApp = glamorous.div({
  fontSize: '2rem'
});

export const RecentTrackWrapper = glamorous.div({
  width: '30rem',
  margin: '0 auto',
  padding: '10rem 0 0 0',

  '@media screen and (min-width:1024px)': {
    width: '60rem'
  }
});

export const RecentTrackLink = glamorous.a({
  display: 'block',
  marginBottom: '2.5rem',

  ':link, :visited': {
    color: darkGrey,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    transition: 'background-color .25s ease-in-out'
  },

  '@media screen and (min-width:1024px)': {
    display: 'inline-flex'
  }
});

export const RecentTrackImage = glamorous.img({
  minWidth: '300px',
  minHeight: '300px'
});

export const RecentTrackInfoList = glamorous.ul({
  padding: '.75rem 1rem',
  width: '300px',
  lineHeight: '1.5',
});

export const RecentTrackInfoListItem = glamorous.ul({
  padding: '.75rem 1rem',
  width: '300px',
  lineHeight: '1.5',
});

export const RecentTrackDate = glamorous.li({
  fontSize: '80%'
});

export const TopBarWrapper = glamorous.div({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '10rem',
  zIndex: '2',
  backgroundColor: '#000'
});

export const LogoWrapper = glamorous.span({
  width: '5rem',
  height: '5rem',
  alignSelf: 'center',
  margin: '2rem'
});

export const MenuWrapper = glamorous.ul({

  display: 'flex',
  flexGrow: '1',
  alignItems: 'center'

  // a {
  //   cursor: pointer;
  //   font-weight: bold;
  //   font-size: 1.75rem;
  //   text-transform: uppercase;
  //   color: rgba(255,255,255,0.5);
  //
  //   &:hover,
  //   &:active {
  //     color: rgba(255,255,255,1);
  //     transition: color .25s ease-in-out;
  //   }
  // }
});

export const MenuItem = glamorous.li({
  padding: '0 2rem 0 0'
});

export const LinkUserWrapper = glamorous.li({
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'row-reverse',
  padding: '0 2rem 0 0',
});


export const UserWrapper = glamorous.div({
  position: 'fixed',
  top: '9.5rem',
  right: '0'

  // a {
  //   text-transform: none;
  // };
});

export const UserLink = glamorous.a({
  display: 'inline-block',
  margin: '5px auto',
  backgroundColor: 'rgba(255, 255, 255, 1)'
});

export const UserInfo = glamorous.ul({
  margin: '0 auto',
  padding: '1rem 0.7rem 0.7rem 0',
  textAlign: 'right',
  color: darkGrey
});
