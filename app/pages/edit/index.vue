<template>
  <div :class="$style.container">
    <h1>Товары</h1>
    <button @click="save">Сохранить</button>
    <table :class="$style.table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Цвет</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>
            <input type="number" v-model.number="product.quantity" />
          </td>
          <td>
            <input type="number" v-model.number="product.price" />
          </td>
          <td>
            <input type="text" v-model="product.color" />
          </td>
        </tr>
      </tbody>
    </table>
    <NuxtLink to="/"> Назад</NuxtLink>
  </div>
</template>

<script setup lang="ts">

const id = useApplicationId();

const { products, load: loadProducts } = await useProducts(id);
const { load } = await useProductsCached(id, products, loadProducts);

onMounted(async () => {
  await load();
  
});

const { save, error } = await useSaveApplication(
  id,
  products
);

</script>

<style lang="scss" module>
.container {
  padding: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
}
</style>
