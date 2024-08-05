export const FriendLists = ({friendsAvatar, name, isOnline, id}) => {
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src={friendsAvatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}