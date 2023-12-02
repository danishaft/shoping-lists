import { History, TopItemAndCategories } from "./interfaces";

//calculate top items and top category
export const calcTopItemsAndCategory = (historyList: History[]): TopItemAndCategories => {
    // filter items with status completed
    const completedItems = historyList
    .filter(history => history.status === 'completed')
    .flatMap(history => history.shoppingList.filter(item => item.completed));

    //calculate item and category frequencies
    let itemFreqs: Record<string, { name: string; totalQuantity: number}> = {};
    let catFreqs: Record<string, {name: string; itemCount: number}> = {};

    completedItems.forEach(item => {
        // Update category quantity to store the highest quantity within each category
        if(!catFreqs[item.category]){
            catFreqs[item.category] = {name: item.category, itemCount: 0}
        }
        catFreqs[item.category].itemCount++;

        // Update item quantity to store the total quantity for each item
        if(!itemFreqs[item.name]) itemFreqs[item.name] = {name: item.name, totalQuantity: 0}
        itemFreqs[item.name].totalQuantity += item.quantity;
    });
    // Calculate the overall total quantity of completed items
    const totalCount = completedItems.reduce((sum, item) => sum + item.quantity, 0);

    // Calculate category percentages based on the highest quantity within each category
    const categoryPercentages: Record<string, { name: string; percentage: number }> = {};
    Object.keys(catFreqs).forEach(category => {
        const { name, itemCount } = catFreqs[category];
        categoryPercentages[category] = { name, percentage: Math.ceil((itemCount / completedItems.length) * 100)};
    });

    // Calculate item percentages based on the total quantity for each item
    const itemPercentages: Record<string, { name: string; percentage: number }> = {};
    Object.keys(itemFreqs).forEach(itemName => {
        const { name, totalQuantity } = itemFreqs[itemName];
        itemPercentages[itemName] = { name, percentage: Math.ceil((totalQuantity / totalCount) * 100 )};
    });

    // Sort items and categories by frequency in descending order
    const sortedItems = Object.keys(itemPercentages).sort((a, b) => itemPercentages[b].percentage - itemPercentages[a].percentage);
    const sortedCategories = Object.keys(categoryPercentages).sort((a, b) => categoryPercentages[b].percentage - categoryPercentages[a].percentage);

    const topItems = sortedItems.slice(0, 3).map(itemName => ({
        name: itemPercentages[itemName].name,
        percentage: itemPercentages[itemName].percentage,
      }));

      const topCategories = sortedCategories.slice(0, 3).map(category => ({
        name: categoryPercentages[category].name,
        percentage: categoryPercentages[category].percentage,
      }));

    return {
        topItems, 
        topCategories
    }
}