import { createSelector } from 'reselect'

const text = state => state.test.text ;

export default createSelector(
  text,
  (text) => {
    const t = text.filter( t => t.complete )
    return t;
  }
);
