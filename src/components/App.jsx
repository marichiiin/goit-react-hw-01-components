import { Profile } from "./Profile/Profile";
import user from '../data/user.json';

import { Statistics } from "./Statistics/Statistics";
import datas from '../data/data.json';

import { FriendLists } from "./FriendList/FriendList"
import friends from '../data/friends.json'

export const App = () => {
  return (
    <>
      <Profile 
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />
      <FriendLists 
        friendsAvatar = {friends.avatar} 
        name = {friends.name}
        isOnline = {friends.isOnline}
        id = {friends.id}
      />
      <Statistics
        statsId = {datas.id}
        label = {datas.label}
        percentage = {datas.percentage}
      />

  </>
  )
}




