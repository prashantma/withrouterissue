import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFriends } from 'store/selectors';

const ListFriends = ({ friendsById }) => {
  const friendslist = [];
  Object.keys(friendsById).forEach(
    (key) => {
      const friend = friendsById[key];
      friendslist.push(
        <li key={friend.id}>
          {friend.id} - {friend.name}
        </li>
      );
    }
  );

  return (
    <div>
      Page 1: <br />
      {friendslist}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      friendsById: getFriends(state)
    }
  }
)(ListFriends);
