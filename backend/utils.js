import { client } from "./redisClient.js";

export const getRoom = async (id) => {
  const room = await client.get(`room:${id}`);
  return JSON.parse(room);
};

export const setRoom = async ({ id, ...room }) => {
  return client.set(`room:${id}`, JSON.stringify(room));
};

export const deleteRoom = () => {
  return client.del(`room:${id}`);
};

export const getUser = async (id) => {
  const user = await client.get(`user:${id}`);
  return JSON.parse(user);
};

export const setUser = async ({ id, ...user }) => {
  return client.set(`user:${id}`, JSON.stringify(user));
};

export const deleteUser = async (id) => {
  return client.del(`user:${id}`);
};
