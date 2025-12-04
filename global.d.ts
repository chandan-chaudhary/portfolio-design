// Declarations for CSS imports so TypeScript accepts side-effect imports like `import './globals.css'`
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// For CSS modules (optional stronger typing)
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
