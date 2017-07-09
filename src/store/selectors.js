import { createSelector } from 'reselect';

const friends = state => state.friends;

export const getFriends = createSelector(
	friends,
	friends => friends.friendsById
);

export const getCurrentPage = createSelector(
	friends,
	friends => friends.currentPage
);
