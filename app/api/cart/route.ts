import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { productId, quantity } = await req.json();

  if (!productId || !quantity || quantity <= 0) {
    return NextResponse.json(
      { message: "Invalid product ID or quantity." },
      { status: 400 }
    );
  }

  try {
    let userCart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { userId: session.user.id },
      });
    }

    const existingCartItem = await prisma.cartItem.findUnique({
      where: { cartId_productId: { cartId: userCart.id, productId } },
    });

    if (existingCartItem) {
      await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
    } else {
      await prisma.cartItem.create({
        data: { cartId: userCart.id, productId, quantity },
      });
    }

    return NextResponse.json({ message: "Product added to cart" }, { status: 200 });
  } catch (error) {
    console.error("Add to cart error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { itemId, quantity } = await req.json();

  if (!itemId || !quantity || quantity <= 0) {
    return NextResponse.json(
      { message: "Invalid item ID or quantity." },
      { status: 400 }
    );
  }

  try {
    const userCart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    if (!userCart) {
      return NextResponse.json({ message: "Cart not found." }, { status: 404 });
    }

    const cartItem = await prisma.cartItem.findUnique({
      where: { id: itemId, cartId: userCart.id },
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Cart item not found." }, { status: 404 });
    }

    await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    });

    return NextResponse.json({ message: "Cart item updated" }, { status: 200 });
  } catch (error) {
    console.error("Update cart item error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { itemId } = await req.json();

  if (!itemId) {
    return NextResponse.json({ message: "Invalid item ID." }, { status: 400 });
  }

  try {
    const userCart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    if (!userCart) {
      return NextResponse.json({ message: "Cart not found." }, { status: 404 });
    }

    const cartItem = await prisma.cartItem.findUnique({
      where: { id: itemId, cartId: userCart.id },
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Cart item not found." }, { status: 404 });
    }

    await prisma.cartItem.delete({
      where: { id: itemId },
    });

    return NextResponse.json({ message: "Cart item removed." }, { status: 200 });
  } catch (error) {
    console.error("Remove cart item error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const userCart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!userCart) {
      return NextResponse.json({ items: [] }, { status: 200 });
    }

    return NextResponse.json(userCart, { status: 200 });
  } catch (error) {
    console.error("Get cart error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
