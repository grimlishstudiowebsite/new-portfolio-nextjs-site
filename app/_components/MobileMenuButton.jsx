"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMobileMenu } from "@/app/_components/MobileMenuProvider";

function MobileMenuButton() {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <button
      aria-label={isOpen ? "close-menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={toggleMenu}
      className="rounded border border-line bg-secondary p-1 text-primary tab-sm:hidden"
      type="button"
    >
      {isOpen ? (
        <XMarkIcon className="size-6" />
      ) : (
        <Bars3Icon className="size-6" />
      )}
    </button>
  );
}

export default MobileMenuButton;
