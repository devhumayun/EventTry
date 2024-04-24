"use server";
import {
  createUser,
  findUserByCredentials,
  getEventById,
  updateGoing,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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

export const addGoingToEvent = async (eventId, user) => {
  try {
    await updateGoing(eventId, user?.id);
    await sendMail(eventId, user);
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    throw error;
  }
};

export const sendMail = async (eventId, user) => {
  try {
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_MAIL_API_KEY);
    const message = `Dear ${user?.name}, you have successfully registered for the event, ${event?.name}, please carry this mail and official id to the venue. We are excited to have you here`;
    const sent = await resend.emails.send({
      from: "humayun@gmail.com",
      to: user?.mail,
      subject: "Successfully Registered for the event",
      html: <p>{message}</p>,
    });
  } catch (error) {
    throw error;
  }
};
