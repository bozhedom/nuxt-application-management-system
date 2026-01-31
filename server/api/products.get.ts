export default defineEventHandler(async (event): Promise<IProduct[]> => {
  const query = getQuery(event);
  const id = query.id;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const products: Record<string, IProduct[]> = {
    '1': [
      {
        id: 1,
        name: 'IPhone 16 Pro 256',
        quantity: 10,
        price: 123.45,
        color: 'red',
      },
      {
        id: 2,
        name: 'IPhone 16 Pro Max 256',
        quantity: 5,
        price: 678.9,
        color: 'blue',
      },
      {
        id: 3,
        name: 'IPhone 52 Pro Ultra Mega Super Max 999',
        quantity: 20,
        price: 99.99,
        color: 'green',
      },
    ],
    '2': [
      {
        id: 1,
        name: 'Sony PlayStation 5 Pro',
        quantity: 101,
        price: 1231.45,
        color: 'yellow',
      },
      {
        id: 2,
        name: 'Sony PlayStation 4 Pro',
        quantity: 5,
        price: 67.9,
        color: 'blue',
      },
      {
        id: 3,
        name: 'Sony PlayStation 3 Pro',
        quantity: 20,
        price: 99.99,
        color: 'green',
      },
    ],
    '3': [
      {
        id: 1,
        name: 'GeForce RTX 4080',
        quantity: 10,
        price: 123.45,
        color: 'red',
      },
      {
        id: 2,
        name: 'GeForce RTX 3080',
        quantity: 5,
        price: 7711.9,
        color: 'black',
      },
      {
        id: 3,
        name: 'GeForce RTX 2080',
        quantity: 20,
        price: 919.99,
        color: 'blue',
      },
    ],
    '4': [
      {
        id: 1,
        name: 'Samsung Odyssey Neo G68',
        quantity: 10,
        price: 123.45,
        color: 'red',
      },
      {
        id: 2,
        name: 'Samsung Odyssey Neo G7',
        quantity: 511,
        price: 6718.9,
        color: 'blue',
      },
      {
        id: 3,
        name: 'Samsung Odyssey Neo G8',
        quantity: 20,
        price: 91119.99,
        color: 'yellow',
      },
    ],
    '5': [
      {
        id: 1,
        name: 'IPhone 16 Pro 256',
        quantity: 10,
        price: 123.45,
        color: 'red',
      },
      {
        id: 2,
        name: 'IPhone 16 Pro Max 256',
        quantity: 5,
        price: 678.9,
        color: 'blue',
      },
      {
        id: 3,
        name: 'IPhone 52 Pro Ultra Mega Super Max 999',
        quantity: 20,
        price: 99.99,
        color: 'green',
      },
    ],
  };

  return products?.[`${id}`] || [];
});
