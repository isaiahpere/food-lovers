"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // simple validation
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image.name) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email)
  ) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
