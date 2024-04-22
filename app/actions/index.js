"use server";
import { createUser, findUserByCredentials } from "@/db/queries";
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
