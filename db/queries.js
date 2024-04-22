import { eventModel } from "@/models/event-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/utils";

export const getAllevents = async () => {
  const events = await eventModel.find().lean();

  return replaceMongoIdInArray(events);
};

export const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();

  return replaceMongoIdInObject(event);
};
