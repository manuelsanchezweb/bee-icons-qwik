# 🐝 Bee Icons for Qwik

Welcome to the bee icons library, your new favorite icon pool!
This npm package is the Qwik package for getting to user all the icons in your project.

## 🔧 Setup

1. `npm install @bee-icons/qwik`
2. Import and use the `<Bee />` in any component

## 🚀 How does it work

You have all available icons on the main platform of [bee-icons](https://www.bee-icons.com), but thanks to TypeScript, you can also access all the icons in the `icon` param. If no param is given, then the bee icon will be rendered.

```tsx
<Bee />
<Bee icon="info-circle" customClass="color-red" />
```

Additionally, you can add some custom classes with `customClass`.
For the moment, we are only using the 24x24 version of the icon, but other sizes are to come soon!
