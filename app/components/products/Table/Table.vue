<template>
  <div :class="$style.container">
    <Button
      @click="onSave"
      title="Сохранить"
      hierarchy="primary"
      size="small"
      :class="$style['save-button']"
      :disabled="!isValid"
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
      <template v-if="loading" #default>
        <tr v-for="n in 3" :key="n">
          <td><div :class="$style.skeletonCell" /></td>
          <td><div :class="$style.skeletonCell" /></td>
          <td><div :class="$style.skeletonCell" /></td>
          <td><div :class="$style.skeletonCell" /></td>
        </tr>
      </template>

      <template v-else #default>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>
            <Input
              placeholder="0"
              :value="String(product.quantity)"
              :error="hasError(product.id, 'quantity')"
              @update:modelValue="
                (val) => {
                  product.quantity = val;
                  handleChange();
                }
              "
            />
          </td>
          <td>
            <Input
              placeholder="0"
              :value="String(product.price)"
              :error="hasError(product.id, 'price')"
              @update:modelValue="
                (val) => {
                  product.price = val;
                  handleChange();
                }
              "
            />
          </td>
          <td>
            <Select
              v-model="product.color"
              :options="COLOR_OPTIONS"
              :error="hasError(product.id, 'color')"
              @update:modelValue="handleChange"
            />
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { COLOR_OPTIONS } from '../../../../shared/constants/color';
import type { FieldErrors } from 'shared/types/app';
import Table from '~/components/BaseTable/Table.vue';
import Button from '~/components/ui/Button/Button.vue';
import Input from '~/components/ui/Input/Input.vue';
import Select from '~/components/ui/Select/Select.vue';
import { useProductValidation } from '~/composables/useProductValidation';

const { errors, validateAll } = useProductValidation();

const id = useApplicationId();
const { products, load: loadProducts, loading } = await useProducts(id);

const { load } = await useProductsCached(id, products, loadProducts);

const { save } = await useSaveApplication(id, products);
const isValid = ref(true);

onMounted(async () => {
  await load();
});

const handleChange = () => {
  isValid.value = true;
};

const hasError = (id: string | number, field: keyof FieldErrors) => {
  console.log(errors.value[id]?.[field]);

  return errors.value[id]?.[field];
};

const onSave = () => {
  isValid.value = validateAll(products.value);

  if (!isValid.value) {
    return;
  }

  save();
};
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

th,
td {
  width: 25% !important;
  min-width: 80px !important;
}

.skeletonCell {
  height: 36px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: skeleton-loading 1.5s infinite ease-in-out;
}

.emptyState {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 16px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
