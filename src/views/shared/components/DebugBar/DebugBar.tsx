import { BuildModeBanner } from "./BuildModeBanner";
import { PrefersColorSchemeBanner } from "./PrefersColorSchemeBanner";
import { CurrentColorModeBanner } from "./CurrentColorModeBanner";

export const DebugBar = () => (
  <>
    <BuildModeBanner />
    <PrefersColorSchemeBanner />
    <CurrentColorModeBanner />
  </>
)