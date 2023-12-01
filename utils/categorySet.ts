import { Item } from "./interfaces"

  export const categorySet = (itemList: Item[]) => {
    //extract unique categories using Set and map
    const categorySet = new Set(itemList.map(item => item.category)) 
    return Array.from(categorySet)
  }