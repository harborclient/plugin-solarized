import type { PluginContext } from "@harborclient/plugin-api";

export function activate(hc: PluginContext): void {
  hc.subscriptions.push(
    hc.themes.register({
      id: "solarized",
      title: "Solarized Dark",
      type: "dark",
      colors: {
        surface: "#002b36",
        sidebar: "#073642",
        "sidebar-section": "#073642",
        control: "#073642",
        field: "rgba(255, 255, 255, 0.06)",
        separator: "rgba(255, 255, 255, 0.1)",
        text: "#839496",
        "text-secondary": "#93a1a1",
        muted: "#657b83",
        accent: "#268bd2",
        selection: "rgba(38, 139, 210, 0.25)",
        danger: "#dc322f",
        warning: "#cb4b16",
        success: "#859900",
      },
    })
  );
}
