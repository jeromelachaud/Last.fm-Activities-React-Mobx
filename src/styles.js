// import { css } from 'glamor';
import glamorous from 'glamorous';

export const StyledApp = glamorous.div({
    textAlign: 'center',
});

export const RecentTrackWrapper = glamorous.div({
  width: '30rem',
  margin: '0 auto',
  padding: '10rem 0 0 0',

  '@media screen and (min-width:1024px)': {
    width: '60rem'
  }
});
