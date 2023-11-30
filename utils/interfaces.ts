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
  id: string
  name: string
  shoppingList: Item[]
  date: string
  status: string
}

export interface MonthSectionProps {
  monthName: string,
  history: History[],
}