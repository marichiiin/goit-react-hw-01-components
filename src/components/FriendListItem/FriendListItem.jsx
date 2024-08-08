import PropTypes from "prop-types";
import cssFriendListItem from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {

    const dynamicClassName = isOnline ? cssFriendListItem.online : cssFriendListItem.offline;

    return (
        <li 
            className={cssFriendListItem.item}
        >
            <span className={dynamicClassName}></span>
            <img 
                className={cssFriendListItem.avatar}
                src={avatar} 
                alt="User avatar" 
            />
            <p className={cssFriendListItem.name}>{name}</p>
        </li>        
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}