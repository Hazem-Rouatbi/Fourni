import Image from "next/image"
import logo from '@/public/logo-no-words.png'
import Link from "next/link"

function HomeIcon({width,height}:{width?:number,height?:number}) {
    const w = width? width:45;
    const h = height? height:45;
    return (
                <Image
                    className="rounded-full"
                    src={logo.src}
                    width={w}
                    height={h}
                    alt="company logo"
                />
                  )
}

export default HomeIcon