export interface NavItem {
  id: string;
  label: string;
  href: string;
  code: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "systems", label: "SYSTEMS", href: "/systems", code: "01" },
  { id: "industries", label: "INDUSTRIES", href: "/industries", code: "02" },
  { id: "work", label: "WORK", href: "/work", code: "03" },
  { id: "about", label: "ABOUT", href: "/about", code: "04" },
];

export const PRIMARY_CTA = {
  label: "START A PROJECT",
  href: "/contact",
};
