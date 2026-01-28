<template>
  <div :class="$style.container">
    <h1>Товары</h1>
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
        <tr v-for="order in products" :key="order.id">
          <td>{{ order.name }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.color }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="save" :disabled="saving">
      {{ saving ? 'Сохранение...' : 'Сохранить' }}
    </button>

    <p v-if="success">Успешно сохранено</p>
  </div>
</template>

<script setup lang="ts">
import type {
  IProduct,
  SaveApplicationPayload,
  SaveResponse,
} from '~/types/api';

const router = useRouter();
const route = useRoute();

const applicationId = computed(() => {
  const id = route.query.id;
  return typeof id === 'string' ? Number(id) : null;
});

const { data: products } = await useFetch<IProduct[]>('/api/products', {
  query: {
    id: applicationId,
  },
  watch: [applicationId],
});

// 🔹 POST сохранение
const saving = ref(false);
const success = ref(false);

const save = async () => {
  if (!applicationId.value) return;

  saving.value = true;
  success.value = false;

  const payload: SaveApplicationPayload = {
    id: applicationId.value,
    products: products.value ? products.value.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
    })) : [],
  };

  const response = await $fetch<SaveResponse>('/api/send', {
    method: 'POST',
    body: payload,
  });

  success.value = response.success;
  saving.value = false;
  router.push('/');
};
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
