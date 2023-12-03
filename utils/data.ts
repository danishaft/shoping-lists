'use client'
import { v4 as uuidv4 } from 'uuid';
import { Item } from './interfaces';
import { formatDate } from './formatDate';


export const itemData: Item[] =  [
        { id: uuidv4(), name: 'Avocado', image: '', note: '', category: 'fruit and vegetables', quantity: 0, completed: false, date: new Date()},
        { id: uuidv4(), name: 'Apple', image: '', note: '', category: 'fruit and vegetables', quantity: 0, completed: false, date: new Date()},
        { id: uuidv4(), name: 'Bear', image: '', note: '', category: 'beverages', quantity: 0, completed: false, date: new Date()}, 
        { id: uuidv4(), name: 'dog', image: '', note: '', category: "pet", quantity: 0, completed: false, date: new Date()}, 
        { id: uuidv4(), name: 'Chicken', image: 'j', note: '', category: 'meat and fish', quantity: 0, completed: false, date: new Date()}, 
    ]

export const singleItem: Item = {
    id: uuidv4(),
    name: '', 
    image: '', 
    note: '', 
    category: '', 
    quantity: 0,
    completed: false,
    date: new Date()
} 