import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";

import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logo} alt="food logo" priority />
          Great Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Search Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Food Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
