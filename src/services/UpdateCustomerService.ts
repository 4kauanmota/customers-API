import prismaCLient from "../prisma";
import UpdateCustomerProps from "../interfaces/UpdateCustomerProps";

export class UpdateCustomerService {
  async execute({ id, data }: UpdateCustomerProps) {
    data.updated_at = new Date();

    try {
      const customer = await prismaCLient.customer.update({
        where: {
          id: id,
        },
        data: data,
      });

      return customer;
    } catch (err: any) {
      throw new Error(`Failed to update customer: ${err.message}`);
    }
  }
}
