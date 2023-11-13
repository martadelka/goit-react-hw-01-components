import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends__container}>
            <ul className={css.friend__list}>
                {friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                    <li key={id} className={css.friend__item}>
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