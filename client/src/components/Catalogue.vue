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
    linkClick: function(event) {
      event.preventDefault();
      alert("Link click disabled for this exercise");
    }
  },
  // Create lifehook
  created: async function() {
    // Make a request to get our products (cors is enabled on the server for this example)
    const response = await fetch("http://localhost:3000/products");
    // Parse the json object
    const products = await response.json();
    // Update our local `state`
    this.products = products;
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
