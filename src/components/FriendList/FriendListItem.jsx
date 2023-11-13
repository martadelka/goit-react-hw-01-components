import css from './FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.friend__item}>
            <span className={`${css.friends__status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}