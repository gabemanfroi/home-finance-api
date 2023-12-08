export class ReadExpenseDTO {
  id: number;
  total: {
    amount: number,
    currency: string
  };
  categories: {
    id: number,
    name: string
  }[];
  user: {
    id: number,
    name: string
  };
  title: string;
  date: Date;
}
