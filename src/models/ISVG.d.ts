import react from React

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// Fixing cannot find module for SVG
// https://annacoding.com/article/5I7om6mCrW25KeA4ObeyMJ/Two-ways-to-solve:-Cannot-find-SVG-module-error-when-compiling-Typescript-in-React-application