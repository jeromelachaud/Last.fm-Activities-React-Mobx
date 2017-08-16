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
