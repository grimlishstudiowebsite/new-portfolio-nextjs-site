"use client";

import { useMobileMenu } from "./MobileMenuProvider";
import Navigation from "./Navigation";

function MobileNavigation() {
  const { isOpen, closeMenu } = useMobileMenu();

  if (!isOpen) {
    return null;
  }
  return (
    <div className="tab-sm:hidden">
      <Navigation variant="mobile" onNavigate={closeMenu} />
    </div>
  );
}

export default MobileNavigation;
