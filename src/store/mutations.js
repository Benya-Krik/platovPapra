export default {
    SET_PRODUCTS(state, value) {
        state.products = value;
    },
    SLICE_PRODUCTS(state) {
        state.loadedProductsQuantity = 0;
        const loadedProducts = state.products.slice(state.loadedProductsQuantity, state.quantityProductsOnPage)
        state.slicedProducts = loadedProducts;
        state.loadedProductsQuantity = state.quantityProductsOnPage;
    },
    LOAD_PRODUCTS(state) {
        if(state.products.length > state.slicedProducts.length){
            const loadedProducts = state.products.slice(state.loadedProductsQuantity, state.loadedProductsQuantity + state.quantityProductsOnPage)
            state.slicedProducts = state.slicedProducts.concat(loadedProducts);
            state.loadedProductsQuantity += state.quantityProductsOnPage;
        }
    },
    SET_CART_PRODUCTS(state, value) {
        state.cartProducts = value
    },
    ADD_PRODUCT(state, value) {
        state.cartProducts.push(value)
        localStorage.setItem(1, JSON.stringify(state.cartProducts));
    },
    REMOVE_PRODUCT(state, value) {        
        for(let i = 0; i < state.cartProducts.length; i++) {
            if(state.cartProducts[i].id === value.id) {
                state.cartProducts.splice(i, 1)
                localStorage.setItem(1, JSON.stringify(state.cartProducts));
            }
        }
    },
}