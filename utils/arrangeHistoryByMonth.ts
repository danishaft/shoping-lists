import { History } from '@/utils/interfaces'
import { isDate, parse } from 'date-fns'
export const arrangeHistoryByMonth = (history: History[]): {[monthName: string]: History[]} => {
    const arrangedHistory: {[monthName: string]: History[]} = {};

    //loop through the historyList to extract the date
    history.forEach((item) => {
      const date = item.date.split(', ')[1].split('/'); // Extract the day, month, and year
      if(date.length !== 3){
        console.error(`Invalid date format for item: ${JSON.stringify(item)}`);
        return;
      }

      // Construct the month and year and day 
      const day = parseInt(date[0], 10);
      const month = parseInt(date[1], 10) - 1; // Months are zero-based in JavaScript
      const year = parseInt(date[2], 10);
      
      try {
        // Attempt to construct the date with date-fns parse function for more reliable date parsing
        const parsedDate = parse(`${year}-${month + 1}-${day}`, 'yyyy-MM-dd', new Date());

        if (!isDate(parsedDate)) {
          console.error(`Invalid date construction for item: ${JSON.stringify(item)}`);
          return;
        }

        // Construct the month and year string
        const monthYear = parsedDate.toLocaleString('en-NG', { month: 'long', year: 'numeric' });

        // Check if there isn't an entry, then initialize an array for that month
        if (!arrangedHistory[monthYear]) {
          arrangedHistory[monthYear] = [];
        }

        // Push each history into its corresponding monthYear
        arrangedHistory[monthYear].push(item);
      } catch (error) {
        console.error(`Error processing date for item: ${JSON.stringify(item)}`, error);
      }
    });
    return arrangedHistory;
  }