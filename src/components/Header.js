import React from "react";
import styles from "../styles/Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const {
    state: { user },
  } = useStateValue();
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.imgContainer}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            alt='facebook logo'
          />
        </div>
        <div className={styles.headerInput}>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.headerOptionActive}>
          <HomeIcon />
        </div>
        <div className={styles.headerOption}>
          <FlagIcon />
        </div>
        <div className={styles.headerOption}>
          <SubscriptionsOutlinedIcon />
        </div>
        <div className={styles.headerOption}>
          <StorefrontOutlinedIcon />
        </div>
        <div className={styles.headerOption}>
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerInfo}>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div className={styles.headerRightIcons}></div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

/*"https://upload.wikimedia.org/
wikipedia/commons/thumb/5/51/
Facebook_f_logo_%282019%29.svg/
1200px-Facebook_f_logo_%282019%29.svg.png
"
*/
