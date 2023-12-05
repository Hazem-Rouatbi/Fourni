import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HomeIcon from "./HomeIcon";
import NavItems from "./NavItems";
import ThemeButton from "./ThemeButton";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";

function NavBar() {
  const user = null;

  return (
    <nav className=" sticky top-0 border-b z-50 inset-x-0 py-2 content-center bg-background">
      <MaxWidthWrapper className="flex px-4 lg:px-2">
        <div className=" flex flex-grow w-40 items-center gap-x-4">
          <Link href='/'>
          <HomeIcon width={40} height={40} />
          </Link>
          <ThemeButton />
        </div>
        <div className="hidden sm:flex w-full ms-4 items-center">
          <NavItems />
        </div>
        <div className="ml-auto flex items-center ">
          <div className="hidden lg:flex lg:items-center lg:space-x-6 lg:justify-end ">
            {user ? null : (
              <Link
                href="/signin"
                className={buttonVariants({ variant: "ghost" })}
              >
                Sign in
              </Link>
            )}
            {user ? null : (
              <span
                className="h-6 w-px bg-muted-foreground"
                aria-hidden="true"
              ></span>
            )}
            {user ? (
              <p></p>
            ) : (
              <Link
                href="/signup"
                className={buttonVariants({ variant: "default" })}
              >
                Sign up
              </Link>
            )}
            {user ? null : (
              <span
                className="h-6 w-px bg-muted-foreground"
                aria-hidden="true"
              ></span>
            )}
            <div className="ml-4 flow-root lg:ml-6">
              <Cart />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavBar;
