export interface FontStyle {
  font: string;
  color: string;
  label: string;
  fontStyle?: string;
  fontWeight?: string;
}

export const hero_font_styles: FontStyle[] = [
  { font: "Super Crawler", color: "#ef4444", label: "Super Crawler" },
  { font: "Retro Block", color: "#f97316", label: "Retro Block" },
  { font: "Smoky Cloud", color: "#ffffff", label: "Smoky Cloud" },
  { font: "Bedane", color: "#d946ef", label: "Bedane" },
  { font: "Foremost", color: "#3b82f6", label: "Foremost", fontStyle: "italic" },
  { font: "Gaseno Rounded", color: "#f59e0b", label: "Gaseno Rounded" }
];

export const font_transition_interval = 300; // milliseconds

