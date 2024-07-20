export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
        return{ ...state, cart:[...state.cart, {...action.payload, qty:1}]
        }
        case "REMOVE_FROM_CART":
        return{ ...state, cart:state.cart.filter((item) => item.id != action.payload.id)
        }
        case "CHANGE_CART_QTY":
            return{...state, 
                  cart:state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)

            }
        default:
            return state;
    }
}


export const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort:action.payload };
        case "FILTER_BY_STOCK":
            return{...state, ByInStock: !state.ByInStock};
        case "FILTER_BY_DELIVERY":
            return{...state,  ByFastDelivery:!state.ByFastDelivery};
        case "FILTER_BY_RATING":
            return{...state, ByRatings:action.payload};
        case "FILTER_BY_SEARCH":
        return{...state, BySearchQuery:action.payload };
        case "CLEAR_FILTERS":
            return {
                ByInStock:false,
                ByFastDelivery:false,
                ByRatings:0,
                BySearchQuery:""
        };
        default:
            return state;
    }
}