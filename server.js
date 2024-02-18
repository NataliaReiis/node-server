import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
  return "Ola mundo ";
});

server.get("/hello", () => {
  return "Heloo";
});

server.listen({
  port: 3031,
});

/* import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("oi")
    return response.end()
});

server.listen(3031);
 */
