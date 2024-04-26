import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(({ avatar, name, isOnline }) => (
        <li key={friends.id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}
