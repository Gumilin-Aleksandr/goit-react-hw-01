import s from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.profileTitle}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.userName}>{username}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.statList}>
        <li className={s.statItem}>
          <span className={s.statTitle}>Followers</span>
          <span className={s.statValue}>{followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statTitle}>Views</span>
          <span className={s.statValue}>{views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statTitle}>Likes</span>
          <span className={s.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
