'use client'
import { ShoppingBag } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import { cn, formatPrice } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

function Cart() {
    let itemCount: number = 0;
    let itemsPrice: number = 100;
    let shipmentPrice: number = 1000
    let discounted: number = shipmentPrice - 0.2 * shipmentPrice
    return (
        <Sheet>
            <SheetTrigger aria-hidden='true' className="hover:bg-secondary group hover:border-b-2 border-black rounded-lg group mr-2 flex items-center p-2">
                <ShoppingBag className=" flex-shrink-0 " />
                <span className="ml-2 text-sm font-medium">0</span>
            </SheetTrigger>
            <SheetContent className="w-full flex flex-col sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full felx-col pr-6">
                            cart items
                        </div>
                        <div>
                            <Separator />
                            {shipmentPrice >= 1000.00 ? (<> <div className="flex ">
                                <span className="flex-1">Shipping</span>
                                <span>{formatPrice(discounted)}</span>
                            </div></>) : (
                                <div className="flex ">
                                    <span className="flex-1">Shipping</span>
                                    <span> {formatPrice(shipmentPrice)} </span>
                                </div>)}


                        </div>
                        <SheetFooter >
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({className:'w-full'})}> Continue to checkout</Link>
                                </SheetTrigger>
                        </SheetFooter>
                    </>
                ) :
                    (<>
                        <div className="flex flex-col h-full items-center text-center w w-full justify-center ">
                            <Image src='' alt='empty cart image' />
                            <p className="text-xl">No items in your cart is empty :{'('}</p>
                            <SheetTrigger asChild>
                                <Link href='/' className={cn('text-muted-foreground',buttonVariants({variant:'link'}))}> Brows around the shop</Link>
                            </SheetTrigger>
                        </div>
                        </>
                    )}
            </SheetContent>

        </Sheet>
    )
}

export default Cart