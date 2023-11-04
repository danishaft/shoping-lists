export interface Input {
    name: string;
    note: string;
    image: string;
    category: string;
  }

  export interface Item extends Input {
    id: string
    quantity: number
}