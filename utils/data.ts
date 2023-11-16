'use client'
import { v4 as uuidv4 } from 'uuid';
import { Item } from './interfaces';


export const itemData: Item[] =  [
        { id: uuidv4(), name: 'Avocado', image: '', note: '', category: 'fruit and vegetables', quantity: 0, completed: false},
        { id: uuidv4(), name: 'Apple', image: '', note: '', category: 'fruit and vegetables', quantity: 0, completed: false},
        { id: uuidv4(), name: 'Bear', image: '', note: '', category: 'beverages', quantity: 0, completed: false}, 
        { id: uuidv4(), name: 'dog', image: '', note: '', category: "pet", quantity: 0, completed: false}, 
        { id: uuidv4(), name: 'Chicken', image: 'j', note: '', category: 'meat and fish', quantity: 0, completed: false}, 
    ]

export const singleItem: Item = {
    id: uuidv4(),
    name: 'Avocado', 
    image: '', 
    note: '', 
    category: 'fruit and vegetables', 
    quantity: 0,
    completed: false
} 