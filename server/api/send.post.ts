export default defineEventHandler(async (event) => {
  const body = await readBody<{
    id: number;
    products: {
      id: number;
      name: string;
      price: number;
    }[];
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
