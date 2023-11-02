'use client'
import { v4 as uuidv4 } from 'uuid';
import { Item } from './interfaces';


export const itemData: Item[] =  [
        { id: uuidv4(), name: 'Avocado', image: 'jj', note: '', category: 'fruit and vegetables'},
        { id: uuidv4(), name: 'Apple', image: 'j', note: '', category: 'fruit and vegetables'},
        { id: uuidv4(), name: 'Bear', image: '', note: '', category: 'beverages'}, 
        { id: uuidv4(), name: 'dog', image: '', note: '', category: "pet"}, 
        { id: uuidv4(), name: 'Chicken', image: 'j', note: '', category: 'meat and fish'}, 
    ]

    export const singleData: Item = {
        id: uuidv4(),
        name: 'Avocado',
        image: 'jj', 
        note: '', 
        category: 'fruit and vegetables'
    }