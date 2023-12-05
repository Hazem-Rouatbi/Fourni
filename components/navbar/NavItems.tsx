"use client";

import { NAV_ITEMS } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex space-x-2">
      {NAV_ITEMS.map((item, i) => {
        const handleOpen = () => {
          activeIndex === i ? setActiveIndex(null) : setActiveIndex(i);
        };
        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={item.value}
            item={item}
            isOpen={isOpen}
            isAnyOpen={activeIndex !== null}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
