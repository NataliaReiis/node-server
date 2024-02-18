import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", () => {
  database.create({
    title: "Video 01",
    description: "Esse é o video 01",
    duration: 100,
  });
});

server.get("/videos", () => {
  return "Heloo";
});

server.put("/videos/id", () => {
  return "Heloo";
});

server.delete("/videos/id", () => {
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
