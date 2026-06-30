// node_modules/.pnpm/@harborclient+sdk@1.0.0_@babel+runtime@8.0.0_@codemirror+lint@6.9.7_@codemirror+search@_4a97bca4b8240b001fbe9e82dfd8384f/node_modules/@harborclient/sdk/dist/runtime/index.js
function registerTheme(hc, theme) {
  const disposable = hc.themes.register(theme);
  hc.subscriptions.push(disposable);
  return disposable;
}

// src/renderer.tsx
function activate(hc) {
  registerTheme(hc, {
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
      success: "#859900"
    }
  });
}
export {
  activate
};
