export default interface UpdateCustomerProps {
  id: string;
  data: {
    name: string;
    email: string;
    updated_at?: Date;
  };
}
