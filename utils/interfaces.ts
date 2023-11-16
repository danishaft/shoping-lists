import { shoppingList } from './../lib/redux/slice/shopingList';
export interface Input {
    name: string;
    note: string;
    image: string;
    category: string;
  }

  export interface Item extends Input {
    id: string
    quantity: number
    completed: boolean
}

export interface History {
  name: string
  shoppingList: Item[]
}