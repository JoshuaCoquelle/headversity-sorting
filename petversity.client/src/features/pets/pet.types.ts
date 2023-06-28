export interface Pet {
  id: number;
  name: string;
  age: number;
  breed: string;
  created_at: string;
  gender: string;
  species: "dog" | "cat";
  updated_at: string;
  user_id: number;
}

export type Pets = Pet[];
