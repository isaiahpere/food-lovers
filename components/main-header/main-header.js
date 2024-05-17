import Link from "next/link";

import logo from "@/assets/logo.png";
import Image from "next/image";

import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

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
              <Link href="/meals">Search Meals</Link>
            </li>
            <li>
              <Link href="/community">Food Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
