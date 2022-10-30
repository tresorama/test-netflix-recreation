Next Page example

```tsx
// pages/index.ts
import type { NextPage } from 'next';
import { AnalisiProdotti } from '@/views/AnalisiProdotti/AnalisiProdotti';
import { NavBottomBar } from '@/views/shared/components/NavBottomBar/NavBottomBar';
import { AppShell } from '@/views/shared/components/AppShell/AppShell';

const Home: NextPage = () => (
  <>
      <AppShell
        topBar={<Box>Logo</Box>}
        content={<AnalisiProdotti />}
        bottomBar={<NavBottomBar />}
      />
  </>
);

export default Home;
```
