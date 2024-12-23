import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const fastify = Fastify({ logger: true });

fastify.setErrorHandler((error, _: FastifyRequest, reply: FastifyReply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await fastify.register(import("@fastify/swagger"));
  await fastify.register(import("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });
  await fastify.register(cors);
  await fastify.register(routes);

  try {
    await fastify.listen({ port: 4444 });
  } catch (err) {
    process.exit(1);
  }
};

start();
