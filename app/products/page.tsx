import { PrismaClient } from "@prisma/client";
import ProductCard from "@/components/ProductCard";

const prisma = new PrismaClient();

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
