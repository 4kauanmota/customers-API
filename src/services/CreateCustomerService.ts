import prismaCLient from "../prisma";
import CreateCustomeProps from "../interfaces/CreateCustomerProps";

class CreateCustomerService {
  async execute({ name, email }: CreateCustomeProps) {
    if (!name || !email) {
      throw new Error("Fill in all the fields");
    }

    const customer = await prismaCLient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
