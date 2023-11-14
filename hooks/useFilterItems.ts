import { Item } from "@/utils/interfaces";
import { capitalizeText } from "./useCapitalize";

export function filterItems(items: Item[], category: string){
    return items.filter(item=> capitalizeText(item.category) === capitalizeText(category))
  }