import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
    <div className={css.descrpition}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.add}>@{tag}</p>
    <p className={css.add}>{location}</p>
    </div>

    <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
    </ul>
    </div>
  );
}

