import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [{
        id: 0,
        product: {
            availabilityStatus: "",
            brand: "",
            category: "",
            description: "",
            dimensions: { width: 0, height: 0, depth: 0 },
            discountPercentage: 0,
            id: 0,
            images: [''],
            meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
            minimumOrderQuantity: 0,
            price: 0,
            rating: 0,
            returnPolicy: "",
            reviews: [{}, {}, {}],
            shippingInformation: "",
            sku: "",
            stock: 0,
            tags: ['', ''],
            thumbnail: "",
            title: "",
            warrantyInformation: "",
            weight: 0
        },
        quantity: 1
    }
    ]
}

const cart_slice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const newCart = {
                id: action.payload.id,
                product: action.payload.product,
                quantity: action.payload.quantity
            }
            state.carts = [...state.carts, newCart]
            console.log("cart added successfully");
        },
        removeCart: (state, action) => {
            const cartId = action.payload.id;
            console.log(cartId);
            state.carts = state.carts.filter((cart) => cart.id !== cartId);
            console.log("Cart Removed");
        },
        // updateQuantity: (state, action) => {
        //     const { id, quantity } = action.payload;
        //     const cart = state.carts.find((cart) => cart.id === id);
        //     if (cart) {
        //         cart.quantity = quantity;
        //         console.log("Quantity updated successfully");
        //     } else {
        //         console.log("Cart not found");
        //     }
        // },
    }
})

export const { addCart, removeCart } = cart_slice.actions
export default cart_slice.reducer
