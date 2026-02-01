<template>
  <div :class="$style.container">
    <Button
      @click="save"
      title="Сохранить"
      hierarchy="primary"
      size="small"
      :class="$style['save-button']"
    />
    <Table>
      <template #header>
        <tr>
          <th>Название</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Цвет</th>
        </tr>
      </template>

      <template #default>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>
            <!-- <UiInput
              :model-value="String(product.quantity)"
              :error="errors[product.id]?.quantity"
            /> -->
            <input type="number" v-model.number="product.quantity" />
          </td>
          <td>
            <!-- <UiInput :model-value="String(product.price)" :error="errors[product.id]?.price" /> -->
            <input type="number" v-model.number="product.price" />
          </td>
          <td>
            <!-- <UiSelect
              v-model="product.color"
              :options="colors"
              :error="errors[product.id]?.color"
            /> -->
            <input type="text" v-model="product.color" />
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table from '~/components/Table/Table.vue';
import Button from '~/components/ui/Button/Button.vue';

const id = useApplicationId();

const { products, load: loadProducts } = await useProducts(id);
const { load } = await useProductsCached(id, products, loadProducts);

onMounted(async () => {
  await load();
});



const { save, error } = await useSaveApplication(id, products);

// const { errors, validateAll  } = useProductValidation();
const colors = ['red', 'blue', 'green'];


// function saveProduct() {
//   const isValid = validateAll(products.value);

//   if (!isValid) {
//     return;
//   }

//   save();
// }


</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.save-button {
  align-self: flex-end;
}
</style>
