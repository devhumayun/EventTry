"use server";
import {
  createUser,
  findUserByCredentials,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  const userData = Object.fromEntries(formData);
  const created = await createUser(userData);
  redirect("/login");
};

export const performLogin = async (formData) => {
  try {
    const credentail = {};
    credentail.email = formData.get("email");

    credentail.password = formData.get("password");
    const validUser = await findUserByCredentials(credentail);
    console.log(validUser);
    return validUser;
  } catch (error) {
    throw error;
  }
};

export const addOrRemoveInterestedEvent = async (eventId, authId) => {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
};
