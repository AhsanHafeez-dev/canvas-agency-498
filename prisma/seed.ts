import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const category1 = await prisma.category.create({
    data: { name: 'Almonds' },
  });
  const category2 = await prisma.category.create({
    data: { name: 'Cashews' },
  });
  const category3 = await prisma.category.create({
    data: { name: 'Walnuts' },
  });
  const category4 = await prisma.category.create({
    data: { name: 'Pistachios' },
  });
  const category5 = await prisma.category.create({
    data: { name: 'Dates' },
  });

  // Create products
  await prisma.product.createMany({
    data: [
      {
        name: 'California Almonds',
        description: 'Premium quality California almonds.',
        price: 12.99,
        imageUrl: 'https://images.unsplash.com/photo-1602948750761-97ea79ee42ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJ5JTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D',
        categoryId: category1.id,
      },
      {
        name: 'Roasted Cashews',
        description: 'Lightly roasted and salted cashews.',
        price: 15.49,
        imageUrl: 'https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaGV3fGVufDB8fDB8fHww',
        categoryId: category2.id,
      },
      {
        name: 'Organic Walnuts',
        description: 'Fresh organic walnuts, perfect for baking.',
        price: 18.00,
        imageUrl: 'https://images.pexels.com/photos/10111850/pexels-photo-10111850.jpeg',
        categoryId: category3.id,
      },
      {
        name: 'Salted Pistachios',
        description: 'Delicious salted pistachios, great snack.',
        price: 14.75,
        imageUrl: 'https://images.unsplash.com/photo-1598110996285-54523b72be93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJ5JTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D',
        categoryId: category4.id,
      },
      {
        name: 'Medjool Dates',
        description: 'Sweet and juicy Medjool dates.',
        price: 10.50,
        imageUrl: 'https://images.unsplash.com/photo-1670775231064-a27ca2c0178d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyeSUyMGZydWl0fGVufDB8fDB8fHww',
        categoryId: category5.id,
      },
      {
        name: 'Premium Almonds',
        description: 'High quality almonds for a healthy snack.',
        price: 13.50,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1675237626334-5cf9d9d8b30c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxtb25kfGVufDB8fDB8fHww',
        categoryId: category1.id,
      },
      {
        name: 'Spiced Cashews',
        description: 'Cashews with a hint of spice.',
        price: 16.00,
        imageUrl: 'https://images.unsplash.com/photo-1627820752174-acae1b399128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzaGV3fGVufDB8fDB8fHww',
        categoryId: category2.id,
      },
      {
        name: 'Pecan Halves',
        description: 'Large pecan halves, great for baking.',
        price: 19.50,
        imageUrl: 'https://images.pexels.com/photos/10111850/pexels-photo-10111850.jpeg', // Using a walnut image as a placeholder for pecans
        categoryId: category3.id,
      },
      {
        name: 'Roasted Pistachios',
        description: 'Perfectly roasted pistachios, unsalted.',
        price: 15.00,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1723629740333-f5240d3eb735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlzdGFjaGlvfGVufDB8fDB8fHww',
        categoryId: category4.id,
      },
      {
        name: 'Deglet Noor Dates',
        description: 'Sweet and chewy Deglet Noor dates.',
        price: 9.75,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1669205434519-a042ba09fbdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ5JTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D', // Using a kishmish image as a placeholder for dates
        categoryId: category5.id,
      },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
