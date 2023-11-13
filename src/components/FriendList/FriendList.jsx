import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends_container}>
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline }) => {
                return (
                <li className={css.friend_item}>
                <span className={`${css.friends__status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
                </li>
                )
            })}
        </ul>
        </div>
    )
}