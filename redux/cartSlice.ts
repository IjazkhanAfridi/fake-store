'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '@/components/common/types';

interface CartItem {
  product: ProductData;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.items.findIndex((item) => item.product.id === action.payload);

      if (indexToRemove !== -1) {
        const itemToRemove = state.items[indexToRemove];
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          state.items.splice(indexToRemove, 1);
        }
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;




// // second way 

// import { ProductData } from '@/components/common/types';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartState {
//     items: Array<ProductData>;
// }

// const initialState: CartState = {
//     items: [],
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action: PayloadAction<ProductData>) => {
//             state.items.push(action.payload);
//         },
//         removeToCart: (state, action: PayloadAction<ProductData>) => {
//             state.items = state?.items?.filter((item: any) => item?.id !== action?.payload);
//         },
//     },
// });

// export const { addToCart, removeToCart } = cartSlice.actions;

// export default cartSlice.reducer;
