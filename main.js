const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                { size: "xs", id: "0001" },
                { size: "sm", id: "0002" },
                { size: "md", id: "0003" },
                { size: "lg", id: "0004" },
                { size: "xl", id: "0005" }
            ]
        }
    }
})
