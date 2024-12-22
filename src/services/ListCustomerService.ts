import prismaCLient from "../prisma";

export class ListCustomerService {
  async execute() {
    const customers = await prismaCLient.customer.findMany();
    return customers;
  }
}
