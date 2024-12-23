import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";
import DeleteCustomerProps from "../interfaces/DeleteCustomerProps";

export class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as DeleteCustomerProps;

    const customerService = new DeleteCustomerService();

    const deleteCustomerService = await customerService.execute({
      id,
    });

    reply.send(deleteCustomerService);
  }
}
