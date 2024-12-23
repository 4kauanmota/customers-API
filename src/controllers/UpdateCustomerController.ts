import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";
import UpdateCustomerProps from "../interfaces/UpdateCustomerProps";

export class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const data = request.body as { name: string; email: string };

    const customerService = new UpdateCustomerService();

    const customer = await customerService.execute({ id, data });

    reply.send(customer);
  }
}
