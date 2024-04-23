import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/utils";
import mongoose from "mongoose";

/**
 * get all events
 */
export const getAllevents = async () => {
  const events = await eventModel.find().lean();

  return replaceMongoIdInArray(events);
};

/**
 * get event by id
 */

export const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();

  return replaceMongoIdInObject(event);
};

/**
 * create new user
 */
export const createUser = async (user) => {
  return await userModel.create(user);
};

/**
 * user login
 */
export const findUserByCredentials = async (credentails) => {
  const user = await userModel.findOne(credentails).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
};

/**
 * update  interested
 */
export const updateInterest = async (eventId, authId) => {
  const event = await eventModel.findById(eventId);

  if (event) {
    const founddUser = event.interested_ids.find(
      (id) => id.toString() === authId
    );
    if (founddUser) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
    event.save();
  }
};

/**
 * Update going
 */
export const updateGoing = async (eventId, authId) => {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));

  event.save();
};
