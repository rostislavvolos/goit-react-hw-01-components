import PropTypes from "prop-types";
import css from "./Friends-list.module.css";
import FriendsListItem from "./friends-list-item";

function FriendsList({ friends }) {
  const element = friends.map((friend) => {
    const { name, avatar, isOnline, id } = friend;

    return (
      <FriendsListItem
        name={name}
        avatar={avatar}
        isOnline={isOnline}
        key={id}
      />
    );
  });

  return <ul className={css.list}>{element}</ul>;
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;
