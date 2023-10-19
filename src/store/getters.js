export default {
    getAllProducts(state) {
        return state.products;
    },
    getSlicedProducts(state){
        return state.slicedProducts
    },
    getCartProducts(state) {
        return state.cartProducts;
    }
}