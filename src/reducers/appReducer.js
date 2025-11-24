export function appReducer(state, action) {
    switch(action.type) {
        case 'added-product': {
            const { product } = action.payload;
            const products = [product, ...state.products];
            return {
                ...state,
                products
            }
        }

        case 'updated-product': {
            const { product } = action.payload;
            const products = state.products.map(p => p.id === product.id ? product : p);
            return {
                ...state,
                products,
            }
        }

        case 'deleted-product': {
            const { id } = action.payload;
            const products = state.products.filter(p => p.id !== id);
            return  {
                ...state,
                products,
            }
        }

        case 'added-cart-item': {
            const { product } = action.payload;
            const cartItem = { product, count: 1 };
            return {
                ...state,
                cart: {...state.cart, [product.id]: cartItem },
            }
        }

        case 'updated-cart-item': {
            const { product, count } = action.payload;
            if (count < 1) {
                delete state.cart[product.id];
            } else {
                state.cart[product.id] = { product, count };
            }
            return {
                ...state,
                cart: { ...state.cart },
            }
        }

        case 'deleted-cart-item': {
            const { id } = action.payload;
            delete state.cart[id];
            return {
                ...state,
                cart: { ...state.cart},
            }
        }

        case 'cleared-cart': {
            return {
                ...state,
                cart: {},
            }
        }

        default: {
            throw new Error(`Invalid action type: ${action.type}`);
        }
    }
}

export function initializeData(data) {
    const storedData = localStorage.getItem('shopmart');
    if (!storedData) return { products: data, cart: {}};
    return JSON.parse(storedData);
}

export async function fetchProducts() {
    const url = 'https://my-json-server.typicode.com/yveshema/comp3170-inventory/products';
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Failed to fetch products');
    return await resp.json();
}

