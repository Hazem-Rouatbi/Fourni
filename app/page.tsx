import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from '@/public/logo-no-words.png'
import { CheckCircleIcon, RedoIcon, StarsIcon, TreeDeciduousIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const perks = [
  {
    icon: CheckCircleIcon,
    name: 'Quality wood',
    discription: 'Our products are made with the highest quality wood'
  },
  {
    icon: RedoIcon,
    name: 'Fast Delivery',
    discription: 'Your products will be dilivered in the same week at a maximum'
  },
  {
    icon: TreeDeciduousIcon,
    name: 'Environmentaly friendly',
    discription: 'For each piece we sell, we plant a tree to keep our planet healthy'
  }

]

export default function Home() {
  return (<>
    <MaxWidthWrapper className="py-10 bg-background mx-auto text-center flex flex-col  items-center max-w-6xl ">
      <h1 className="text-4xl tracking-tighter sm:text-6xl">
        The best place to buy & sell forniutre with guaranteed {' '}
        <span className="text-input font-extrabold">
          quality
        </span>
      </h1>
      <p className=" mt-5 max-w-prose text-2xl sm:text-4xl">Welcome to  {' '} <span className="text-amber-900 font-extrabold">FOURNI {' '} </span><span className="inline-block"> <Image className="rounded-full"
        src={logo.src} alt="logo" height={24} width={24} /></span>{' '} browser around our site and take a pick at whatever you like.
      </p>
      <div className="flex flex-col sm:flex-row gap-4  mt-4 ">
        <Link  href='/products' className={cn(buttonVariants(),'lg:text-xl')}>
          New Products
        </Link>
        <Link href='/signup' className={`lg:text-xl ${buttonVariants({variant:'outline'})}`}  >Sign Up &rarr;</Link>
      </div>
    </MaxWidthWrapper>
    {/*TODO LIST NEWEST PRODUCTS
    */}
    <MaxWidthWrapper className="bg-secondary gap-x-10 justify-center py-10 grid grid-cols-1 gap-y-4 sm:gap-y-8 lg:flex lg:flex-cols sm:py-20">
      {perks.map((perk) =>
        <div className="flex flex-col text-center items-center justify-between " key={perk.name}>
          <div className="rounded-full h-16 w-16 flex text-secondary items-center justify-center bg-ring">
            {<perk.icon />}
          </div>
          <h3 className=" text-4xl font-bold ">{perk.name}</h3>
          <p className="mt-2">{perk.discription}</p>
        </div>
      )}
    </MaxWidthWrapper>
  </>
  )
}
