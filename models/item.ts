import {Schema, model, models} from 'mongoose';

const ItemSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    item: {
        type: String,
        required: [true, 'Item is required']
    }
})

const Item = models.Item || model('Item', ItemSchema)
export default Item;