import './App.css';
import Profile from '../src/components/profile-social-link/profile-social-link';
import './reset.css'
import dataSet from './data';
import Statistics from './components/statistic-section/statistic-section';
import FriendsList from './components/friends-list/friends-list';
import TransactionHistory from './components/transaction-history/transaction-history';

const {
  data,
  friends,
  user,
  transaction
} = dataSet;

function App() {
  return (
    <div className="App">
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendsList friends={friends} />
<TransactionHistory items={transaction} />;
    </div>
  );
}

export default App;
