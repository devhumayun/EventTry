import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/utils";

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
