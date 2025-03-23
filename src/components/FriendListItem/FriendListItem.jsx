import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" className={s.friendAvatar} />
      <p className={s.friendName}>{name}</p>
      <p className={isOnline ? s.friendOnline : s.friendOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
