"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Dry Fruit Store
        </Link>
        <div className="space-x-4">
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          {session?.user ? (
            <>
              <Link href="/orders" className="hover:text-gray-300">
                My Orders
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="hover:text-gray-300 bg-red-600 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/auth/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
