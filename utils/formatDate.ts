//receives a date object and formats it to return a string
export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric'};
    return new Intl.DateTimeFormat('en-NG', options).format(date)
}