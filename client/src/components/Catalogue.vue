<template>
  <div class="catalogue">
    <h1>Greenfields Channel</h1>
    <p>Please select a product from our catalogue.</p>
    <h3>Catalogue</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        <a
          :href="'/products/' + product.id"
          target="_blank"
          rel="noopener"
          v-on:click="linkClick"
        >{{product.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// Please note: CORS is enabled on the server for this example
export default {
  // Component nane
  name: "Catalogue",
  // Parent props
  props: {},
  // Data
  data: () => ({
    products: []
  }),
  // Methods
  methods: {
    /**
     * Handle link click.
     */
    linkClick: function(event) {
      event.preventDefault();
      alert("Link click disabled for this exercise");
    },
    /**
     * Create product.
     */
    createProduct: async function() {
      // Make a request to create our new product
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ id: "5", name: "New Product" })
      });
      // Parse the json object
      const products = await response.json();
      // Update our local `state`
      this.products = products;
    },
    /**
     * Read product listing.
     */
    readProducts: async function() {
      // Make a request to get our products
      const response = await fetch("http://localhost:3000/products");
      // Parse the json object
      const products = await response.json();
      // Update our local `state`
      this.products = products;
    },
    /**
     * Update product.
     */
    updateProduct: async function() {
      // Make a request to update our new product
      const response = await fetch("http://localhost:3000/products/5", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ id: "5", name: "New Product New Name" })
      });
      // Parse the json object
      const products = await response.json();
      // Update our local `state`
      this.products = products;
    },
    /**
     * Delete product.
     */
    deleteProduct: async function() {
      // Make a request to delete our new product
      const response = await fetch("http://localhost:3000/products/5", {
        method: "DELETE"
      });
      // Parse the json object
      const products = await response.json();
      // Update our local `state`
      this.products = products;
    }
  },
  // Created lifehook
  created: async function() {
    // Get the product listing
    await this.readProducts();
    // Create a new product
    await this.createProduct();
    // Update a product
    await this.updateProduct();
    // Delete this newly created product
    await this.deleteProduct();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: block;
  margin: 0 0 10px 0;
}
a {
  color: #42b983;
}
</style>
