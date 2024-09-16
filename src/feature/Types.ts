export type FormValues = {
    id: string;
    name: string;
    createAt:  Date | undefined;
    startDate: Date | undefined;
  };

export type UserAttribute = {
  string: string[]
}[]