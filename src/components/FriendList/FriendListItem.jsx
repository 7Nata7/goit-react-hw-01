import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.cards}>
      <img src={avatar} alt="Avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.text, isOnline === true ? css.online : css.offline)}
      >
        {" "}
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
