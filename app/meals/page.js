import { Suspense } from "react";
import Link from "next/link";

import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

import Loading from "./loading-out";
import styles from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "All yummy meals to cook",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

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
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
