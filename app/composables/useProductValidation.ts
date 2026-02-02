import type { FieldErrors } from 'shared/types/app';
import { ref } from 'vue';

const NUMBER_REGEX = /^\d+(\.\d+)?$/;
const INTEGER_REGEX = /^\d+$/;


type ErrorsMap = Record<string | number, FieldErrors>;

export function useProductValidation() {
  const errors = ref<ErrorsMap>({});

  const validateProduct = (product: any): boolean => {
    const productErrors: FieldErrors = {};

    if (!INTEGER_REGEX.test(String(product.quantity))) {
      productErrors.quantity = true;
    }

    if (!NUMBER_REGEX.test(String(product.price))) {
      productErrors.price = true;
    }

    if (Object.keys(productErrors).length > 0) {
      errors.value = {
        ...errors.value,
        [product.id]: productErrors,
      };
      return false;
    }

    const { [product.id]: _, ...rest } = errors.value;
    errors.value = rest;

    return true;
  };

  const validateAll = (products: any[]): boolean => {
    errors.value = {};
    let isValid = true;

    for (const product of products) {
      if (!validateProduct(product)) {
        isValid = false;
      }
    }

    return isValid;
  };

  return {
    errors,
    validateAll,
    validateProduct
  };
}
