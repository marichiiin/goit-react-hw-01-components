import PropTypes from "prop-types";
import { FriendListItem } from '../FriendListItem/FriendListItem'
import cssFriendList from './FriendList.module.css'

export const FriendLists = ({friends}) => {
    return (
        <ul className={cssFriendList.lists}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                 key = {id}
                 avatar = {avatar}
                 name = {name}
                 isOnline = {isOnline}
                 id = {id}
                />
            ))}
        </ul>
    )
}

FriendLists.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
}