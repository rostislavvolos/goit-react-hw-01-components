import PropTypes from "prop-types";
import css from "./Friends-list-item.module.css";

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <li className={css.item}>
        <span className={`${css.status} ${isOnline ? css.online : css.notOnline}`}></span>
        <img className={css.image} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

  export default FriendsListItem;
