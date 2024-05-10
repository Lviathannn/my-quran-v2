import DoaIcon from "@/components/icons/DoaIcon";
import LampIcon from "@/components/icons/LampIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import QuranIcon from "@/components/icons/QuranIcon";

export const PATH = {
  HOME: "/",
  DOA: "/doa",
  EXPLORE: "/explore",
  BOOKMARK: "/bookmark",
};

export const API_URL = "https://equran.id/api";

export const NAVIGATION_ITEMS = [
  {
    title: "Al Qur'an",
    path: PATH.HOME,
    icon: QuranIcon,
  },
  {
    title: "Explore",
    path: PATH.EXPLORE,
    icon: LampIcon,
  },
  {
    title: "Doa",
    path: PATH.DOA,
    icon: DoaIcon,
  },
  {
    title: "Bookmark",
    path: PATH.BOOKMARK,
    icon: BookmarkIcon,
  },
];
