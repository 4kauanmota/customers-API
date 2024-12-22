import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";
import CreateCustomeProps from "../interfaces/CreateCustomerProps";

export class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as CreateCustomeProps;

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}
