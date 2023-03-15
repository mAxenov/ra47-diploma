import { createSlice } from '@reduxjs/toolkit';


const basketSlice = createSlice({
    name: 'bascket',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action) {
            const idItems = state.items.filter(items => items.id === action.payload.id) || [];
            if (idItems.length > 0) {
                const sizeItem = idItems.find(items => items.size === action.payload.size);
                if (sizeItem) {
                    sizeItem.count = sizeItem.count + action.payload.count;
                    return
                }
            }
            state.items.push(action.payload);

        },
        removeItem(state, action) {
            state.items = state.items.filter(items => !(items.id === action.payload.id && items.size === action.payload.size));
        },

        cleaningStore(state) {
            state.items = []
        }
    }
})

export default basketSlice.reducer;
export const { addItem, removeItem, cleaningStore } = basketSlice.actions;