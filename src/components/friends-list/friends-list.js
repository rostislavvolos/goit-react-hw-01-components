import PropTypes from 'prop-types';
import css from './Friends-list.module.css';
import FriendsListItem from './friends-list-item';


function FriendsList ({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(friend => {
        const { name, avatar, isOnline, id } = friend;

        return (
            <FriendsListItem
              name={name}
              avatar={avatar}
              isOnline={isOnline}
              key={id}
            />
        );
      })}
</ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
  };

export default FriendsList;