import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.post(
    "/create/customer",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "email"],
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
          },
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/list/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    }
  );
}
