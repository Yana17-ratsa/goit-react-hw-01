import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
