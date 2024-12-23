import prismaCLient from "../prisma";
import DeleteCustomerProps from "../interfaces/DeleteCustomerProps";

export class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Send the ID, please");
    }

    let findCustomer;
    try {
      findCustomer = await prismaCLient.customer.findFirst({
        where: {
          id: id,
        },
      });
    } catch {
      throw new Error("Customer not found");
    }

    await prismaCLient.customer.delete({
      where: {
        id: id,
      },
    });

    return findCustomer;
  }
}
