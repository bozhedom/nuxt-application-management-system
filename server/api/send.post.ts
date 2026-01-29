import type { IProduct } from "~/types/api";

export default defineEventHandler(async (event): Promise<{ success: boolean }> => {
  const body = await readBody<{
    id: number;
    products: IProduct[];
  }>(event);

  if (!body?.id || !Array.isArray(body.products)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload',
    });
  }

  console.log('SAVE APPLICATION', body);

  return { success: true };
});
