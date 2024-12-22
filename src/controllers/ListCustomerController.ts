import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

export class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customer = new ListCustomerService();

    const customers = await customer.execute();

    reply.send(customers);
  }
}
