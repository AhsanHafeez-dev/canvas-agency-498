import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={200}
          className="rounded-md mb-4 object-cover w-full h-48"
        />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}
