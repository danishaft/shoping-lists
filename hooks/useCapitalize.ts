// capitalize any text
export const capitalizeText = (text: any) => {
    return text && text?.charAt(0).toUpperCase() + text.slice(1);
};