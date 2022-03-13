import asyncRedis from "async-redis";

//redis-cli -h redis-10410.c60.us-west-1-2.ec2.cloud.redislabs.com -p 10410 -a xvzOyNCVtIjrdsh3P4LThe49T53DfddR

const client = asyncRedis.createClient({
  host: "redis-10410.c60.us-west-1-2.ec2.cloud.redislabs.com",
  port: 10410,
  password: "xvzOyNCVtIjrdsh3P4LThe49T53DfddR",
});

client.on("connect", () => {
  console.log(process.env.REDIS_HOST);
  console.log("Connected to redis instance.");
});

client.on("error", function (err) {
  console.log("Redis Conn Error: " + err);
});

export { client };
