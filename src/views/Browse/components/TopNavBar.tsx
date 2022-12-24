import Link from "next/link";
import { AvatarIcons, BellIcon, NetflixIcon, SearchIcon } from "@/views/shared/components/Icons";
import { useScrollPosition } from "../hooks/use-scroll-position";

const AvatarIcon = AvatarIcons[0];
const menuItems = ['Browse'];

export const TopNavBar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 h-[70px] ${scrollPosition.isAtTop ? 'bg-transparent' : 'bg-[#141414]'} transition-colors`}>
        <div className="absolute z-[-1] inset-0 bg-gradient-to-b from-black"></div>
        <div className="flex items-center h-full gap-8 px-4">
          {/* LOGO */}
          <div className="w-[80px]">
            <Link href="/">
              <NetflixIcon />
            </Link>
          </div>
          {/* NAV */}
          <div className="flex gap-2">
            {menuItems.map(item => (
              <div key={item} className="text-sm">
                <span>{item}</span>
              </div>
            ))}
          </div>
          {/* BUTTONS */}
          <div className="ml-auto">
            <div className="flex items-center gap-6">
              <div className="w-[28px]">
                <SearchIcon />
              </div>
              <div className="w-[30px]">
                <BellIcon />
              </div>
              <div className="w-[50px] rounded overflow-hidden">
                <AvatarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};