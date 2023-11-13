import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends__container}>
            <ul className={css.friend__list}>
                {friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                    <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
                    )
                })}
            </ul>
        </div>
    )
}