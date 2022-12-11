```tsx
import React from "react";
import { useRouter } from "next/router";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { ColorModeTogglerButton, ColorModeTogglerSwitch } from "@/views/shared/components/ColorModeToggler/ColorModeToggler";
import { NavBottomBarItem, NavBottomBarWrapper } from "./NavBottomBar";
// import { IS_PRODUCTION } from "@/constants/client";

const NavBottomBar = () => {
  const router = useRouter();
  // if (IS_PRODUCTION) return null;

  return (
    <>
      <NavBottomBarWrapper>
        <NavBottomBarItem
          Icon={() => (
            <>
              {/* <ColorModeTogglerButton /> */}
              <ColorModeTogglerSwitch />
            </>
          )}
          labelText={''}
          isActive
        />
        <NavBottomBarItem
          Icon={SearchIcon}
          labelText={'Saved'}
          isActive={router.pathname === '/saved-picture'}
          onClick={() => router.push("/saved-picture")}
        />

        <NavBottomBarItem
          Icon={AddIcon}
          labelText={'Generate'}
          isActive={router.pathname === '/'}
          onClick={() => router.push("/")}
        />
      </NavBottomBarWrapper>
    </>
  );
};
```
