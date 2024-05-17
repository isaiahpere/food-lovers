import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Yummy meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>Pick your fav recipe and try out! </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share Fav Meal</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
