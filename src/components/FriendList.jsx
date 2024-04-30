import FriendListItem from './FriendListItem';

const FriendList = ({ avatar, name, isOnline
}) => {
    return (
        <ul>
	<li>
		<FriendListItem avatar={avatar} name={name} status={isOnline}  />
	</li>
</ul>
    );
};

export default FriendList;

