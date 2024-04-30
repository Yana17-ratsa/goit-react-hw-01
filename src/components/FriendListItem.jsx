import clsx from "clsx";

const FriendListItem =({
    avatar, name, status,
}) => {
    return (
        <div>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
  {status ? <p className={clsx ("online")}>Online</p> : <p className={clsx ("offline")}>Offline </p> }
</div>
);
};

export default FriendListItem;