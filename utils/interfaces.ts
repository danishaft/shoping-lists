
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
    date: Date
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
export interface StatsItem{
  name: string,
  percentage: number
}
export interface HistoricalMonthData{
  month: string
  monthNum: number
  year: number
  count: number
}

export interface TopItemAndCategories {
  topItems: StatsItem[];
  topCategories: StatsItem[]
  topHistoricalMonthData: HistoricalMonthData[]
}