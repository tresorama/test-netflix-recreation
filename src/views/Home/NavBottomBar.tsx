import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeTogglerSwitch } from "@/views/shared/components/ColorModeToggler/ColorModeToggler";
import { NavBottomBarItem, NavBottomBarWrapper } from "@/views/shared/components/NavBottomBar/NavBottomBar";
import { PhotoIcon } from "@/views/shared/components/Icons";

export const NavBottomBar = () => {
  const router = useRouter();

  return (
    <NavBottomBarWrapper>
      <NavBottomBarItem
        Icon={ColorModeTogglerSwitch}
        labelText={''}
        isActive
      />
      <NavBottomBarItem
        Icon={HamburgerIcon}
        labelText={'Home'}
        isActive={router.pathname === '/'}
        onClick={() => router.push("/")}
      />
      <NavBottomBarItem
        Icon={PhotoIcon}
        labelText={'Photographer'}
        isActive={router.pathname === '/photographer'}
        onClick={() => router.push("/photographer")}
      />
    </NavBottomBarWrapper>
  );
};