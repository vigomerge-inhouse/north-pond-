import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Overview } from "./components/pages/Overview";
import { ModernLiving } from "./components/pages/ModernLiving";
import { PropertyHighlights } from "./components/pages/PropertyHighlights";
import { Features } from "./components/pages/Features";
import { Bedrooms } from "./components/pages/Bedrooms";
import { PremiumFeatures } from "./components/pages/PremiumFeatures";
import { Amenities } from "./components/pages/Amenities";
import { OutdoorLiving } from "./components/pages/OutdoorLiving";
import { Location } from "./components/pages/Location";
import { Details } from "./components/pages/Details";
import { ScheduleShowing } from "./components/pages/ScheduleShowing";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "modern-living", Component: ModernLiving },
      { path: "property-highlights", Component: PropertyHighlights },
      { path: "features", Component: Features },
      { path: "bedrooms", Component: Bedrooms },
      { path: "premium-features", Component: PremiumFeatures },
      { path: "amenities", Component: Amenities },
      { path: "outdoor-living", Component: OutdoorLiving },
      { path: "location", Component: Location },
      { path: "details", Component: Details },
      { path: "schedule-showing", Component: ScheduleShowing },
    ],
  },
]);
