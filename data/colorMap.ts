// Shared color map for FeatureCard and ServiceCard icon containers

export interface ColorEntry {
  bg: string; // icon container background
  text: string; // icon color
  dot: string; // bullet dot color for list items
}

export const colorMap: Record<string, ColorEntry> = {
  primary: { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-500" },
  red: { bg: "bg-red-50", text: "text-red-600", dot: "bg-red-500" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", dot: "bg-teal-500" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", dot: "bg-orange-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-500" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-600", dot: "bg-yellow-500" },
  green: { bg: "bg-green-50", text: "text-green-600", dot: "bg-green-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-500" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", dot: "bg-indigo-500" },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", dot: "bg-cyan-500" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", dot: "bg-pink-500" },
  slate: { bg: "bg-slate-50", text: "text-slate-600", dot: "bg-slate-500" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", dot: "bg-violet-500" },
  fuchsia: {
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-600",
    dot: "bg-fuchsia-500",
  },
};
