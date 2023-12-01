import { capitalizeText } from "@/hooks/useCapitalize";
import { Item } from "./interfaces";

  //filter items based on category
export const filterByCategory = (data: Item[], category: string) => (
    data.filter( item => capitalizeText(category) === capitalizeText(item.category) )
)