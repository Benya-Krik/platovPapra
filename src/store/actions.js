import axios from 'axios';

export default {
    async fetchProducts(ctx) {
        await axios.get('https://api.platovcorp.site/product.json').then(response => {
            if(response.status === 200){
                this.dispatch('fetchCart')
                ctx.commit('SET_PRODUCTS', response.data)
                ctx.commit('SLICE_PRODUCTS')
            }
        })
    },
    fetchCart(ctx) {
        const cartItems = localStorage.getItem(1);
        ctx.commit('SET_CART_PRODUCTS', JSON.parse(cartItems))
    }
}