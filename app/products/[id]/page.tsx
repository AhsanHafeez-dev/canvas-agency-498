import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-md">
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl || '/placeholder.jpg'}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-md object-cover w-full h-96"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-6">${product.price.toFixed(2)}</p>
          <div className="mb-4">
            <span className="font-semibold">Category: </span>
            <span className="text-gray-700">{product.category.name}</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
