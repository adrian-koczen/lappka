import React from "react";
import styles from "./styles.module.css";
// Components
import NavigationTab from "./NavigationTab/NavigationTab";
// Assets
import logo from "../../../assets/logo.svg";
import logoText from "../../../assets/logoText.svg";
import dashboardIcon from "../../../assets/dashboard/dashboardIcon.svg";
import messagesIcon from "../../../assets/dashboard/messagesIcon.svg";
import handIcon from "../../../assets/dashboard/handIcon.svg";
import animalIcon from "../../../assets/dashboard/animalsIcon.svg";
import logoutIcon from "../../../assets/dashboard/logoutIcon.svg";

const tabs = [
  {
    id: 0,
    icon: dashboardIcon,
    title: "Dashboard",
    active: true,
  },
  {
    id: 1,
    icon: messagesIcon,
    title: "Wiadomości",
    active: false,
  },
  {
    id: 2,
    icon: animalIcon,
    title: "Karty zwierząt",
    active: false,
  },
  {
    id: 3,
    icon: handIcon,
    title: "Wolontariat",
    active: false,
  },
];

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
          <img className={styles.logoText} src={logoText} alt="logoText" />
        </div>
        <div className={styles.menuContainer}>
          {tabs &&
            tabs.map((tab) => {
              return (
                <NavigationTab
                  key={tab.id}
                  title={tab.title}
                  icon={tab.icon}
                  active={tab.active}
                />
              );
            })}
        </div>
      </div>
      <div>
        <div className={styles.logoutContainer}>
          <img className={styles.logoutIcon} src={logoutIcon} alt="logout" />
          <span className={styles.logoutText}>Wyloguj się</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
