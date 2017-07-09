import { push } from 'react-router-redux';

export const SWITCH_PAGE = 'app/SWITCH_PAGE';

export const onSwitchPage = (currentPage) => {
  return {
    type: SWITCH_PAGE,
    page: currentPage,
  }
};

export const onPushPage = (currentPage) => {
  if(currentPage === 1) {
    return push('/again');
  }
  else {
    return push('/');
  }
};
