
```tsx
import { AppShell } from '@/views/shared/components/AppShell/AppShell';
import { AnalisiProdotti } from './AnalisiProdotti';

const NavBottomBar = () => {
  const router = useRouter();

  return (
    <NavBottomBarWrapper>
      <NavBottomBarItem
        Icon={ColorModeTogglerSwitch />}
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
        Icon={SearchIcon}
        labelText={'Analisi Prodotti'}
        isActive={router.pathname === '/analisi-prodotti'}
        onClick={() => router.push("/analisi-prodotti")}
      />
    </NavBottomBarWrapper>
  )
}

const View = () => (
  <AppShell
    topBar={<Box>Logo</Box>}
    content={<AnalisiProdotti />}
    bottomBar={<NavBottomBar />}
  />
);

export default Home;
```
