console.log('cia');

Vue.component('computer', {
    template: `
        <main class="main-content">

            <!-- Computers-->
            <section id="computers" class="main-section container">

                <div class="row">
                    <div v-for="item in items" class="card" style="width: 520px">
                        <div class="row product-row no-gutters">
                            <div class="col-md-5">
                                <img :src="item.img" class="card-img" :alt="item.name">
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h5 class="card-title">{{ item.name }}</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            ID: {{ item.id }}
                                        </li>
                                        <li class="list-group-item">
                                            {{item.category}}
                                        </li>
                                        <li class="list-group-item text-success text-right">
                                            {{item.price + ' €'}}
                                        </li>
                                    </ul>
                                    <p class="card-text"><small class="text-muted">
                                    
                                    </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `,
    data() {
        return {
            items: [
                {
                    id: 0001,
                    img: 'https://www.rstore.it/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/m/x/mxk52_1_1.jpg',
                    name: 'Macbook Pro',
                    price: '1499,00',
                    category: 'Laptop'
                },
                {
                    id: 0002,
                    img: 'https://www.rstore.it/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/1/7/17096_1.jpg',
                    name: 'iMac Pro',
                    price: '1999,00',
                    category: 'Laptop'
                },
            ],
        }
    }
})


/**
 * Main VUE
 */

const app = new Vue({
    el: '#app',
    data: {
        
    }
});