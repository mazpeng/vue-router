<template>
  <div class="selection-products">
    <div class="row">
      <div class="col-1-of-4">
        <div v-if="products" class="products">
          <div
            class="card"
            style="width: 18rem"
            v-for="product in products"
            :key="product.id"
          >
            <img
              :src="product.imageSrc"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary">Detail Product</a>
            </div>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      products: null, // Mengubah 'jobs' menjadi 'products' karena hasil dari query adalah produk.
    };
  },
  mounted() {
    const url = "http://localhost:4000/";
    const headers = {
      // Menambahkan headers jika belum ada.
      "Content-Type": "application/json",
    };

    const query = `
      {
        products {
          id
          image
          name
          price
          description
          category {
            name
          }
        }
      }
    `;

    axios
      .post(url, { query }, { headers })
      .then((response) => {
        this.products = response.data.data.products; // Mengubah 'jobs' menjadi 'products' untuk mencocokkan key dari respons.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>

<style>
.row {
  max-width: 70rem;
  margin: 0 auto;
}

.products {
  background-color: #fff;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}
.card {
  margin-top: -35px;
}
</style>
