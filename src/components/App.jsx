import { Profile } from "./Profile/Profile";
import user from '../data/user.json';

import { Statistics } from "./Statistics/Statistics";
import datas from '../data/data.json';

import { FriendLists } from "./FriendList/FriendList"
import friends from '../data/friends.json'

import { TransactionHistory } from "./Transaction/Transactions"
import transactions from '../data/transactions.json';

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
      
      <Statistics title="Upload Stats" stats={datas}/>
      <FriendLists friends = {friends}/>
      <TransactionHistory items={transactions} />

    </>
  )
}




