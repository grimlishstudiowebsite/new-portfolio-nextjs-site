import Navigation from "./Navigation";
import Logo from "./Logo";

import { MobileMenuProvider } from "./MobileMenuProvider";
import MobileNavigation from "./MobileNavigation";
import MobileMenuButton from "./MobileMenuButton";

function Header() {
  return (
    <MobileMenuProvider>
      <header className="">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Logo />
          <div className="flex flex-col gap-2">
            <div className="hidden tab-sm:block">
              <Navigation />
            </div>

            <MobileMenuButton />
          </div>
        </div>
        <div>
          <MobileNavigation />
        </div>
      </header>
    </MobileMenuProvider>
  );
}

export default Header;
