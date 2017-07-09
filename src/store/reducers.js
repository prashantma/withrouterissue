import { SWITCH_PAGE } from './actions';

const initialState = {  
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Friend 1'
    },
    2: {
      id: 2,
      name: 'Friend 2'
    },
    3: {
      id: 3,
      name: 'Friend 3'
    }
  },
  currentPage: 1,
};

export default function friends(state = initialState, action) {  
  switch (action.type) {

    case SWITCH_PAGE:
      return {
        ...state,
        currentPage: action.page === 1 ? 2 : 1,
      }

    default:
      return state;
  }
}
