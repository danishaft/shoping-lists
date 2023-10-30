'use client'
export const saveToLocalStorage = (data: any, name: string) => {
    localStorage.setItem(name, JSON.stringify(data))
    return data
}

export const loadFromLocalStorage = (name: string) => {
    const item = localStorage.getItem(name);
    const data = item ? JSON.parse(item): null
    return data
}