import { History, TopItemAndCategories } from "./interfaces";

//calculate top items and top category and historical month data
export const calcTopItemsAndCategory = (historyList: History[]): TopItemAndCategories => {
    // filter items with status completed
    const completedItems = historyList
    .filter(history => history.status === 'completed')
    .flatMap(history => history.shoppingList.filter(item => item.completed));

    //calculate item and category frequencies
    let itemFreqs: Record<string, { name: string; totalQuantity: number}> = {};
    let catFreqs: Record<string, {name: string; itemCount: number}> = {};
    // Calculate completed items per month
    const completedItemsPerMonth: Record<string, number> = {};

    completedItems.forEach(item => {
        //convert the date from the item obj
        const dateObj = new Date(item.date)
        // const month = dateObj.toLocaleString('en-us', {month: 'short'});
        const monthYear = `${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`

        //update the month to store the occurrence of items in that month
        if(!completedItemsPerMonth[monthYear]) completedItemsPerMonth[monthYear] = 0
        completedItemsPerMonth[monthYear] += item.quantity;

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

    // Convert completed items per month(historical data) to an array of objects
    const historicalMonthData = Object.keys(completedItemsPerMonth).map(monthYear => {
        const [month, year] = monthYear.split('-')
        return {
            month: Number(month),
            year: Number(year),
            count: completedItemsPerMonth[monthYear],
        }
    })
    // Sort completed items by month
    const sortedHistoricalMonthData = historicalMonthData.sort(
        (a, b) => a.year - b.year || a.month - b.month
    );

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

      const topHistoricalMonthData = sortedHistoricalMonthData.map(item => {
        const dateObject = new Date(`${item.month}/1/${item.year}`); // Assuming day is always 1
        return{
            month: dateObject.toLocaleString('en-us', { month: 'short' }),
            count: item.count,
            monthNum: item.month,
            year: item.year
        }
      })

    return {
        topItems, 
        topCategories,
        topHistoricalMonthData,
    }
}