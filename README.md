# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Props và Composition

- Props là dữ liệu được truyền từ component cha xuống component con
- Props là thuộc tính READ-ONLY, component con không thay đổi được. Muốn đổi thì nhờ component cha
- Props giúp tạo ra sự đa dạng ch component. Cùng một component với props khác nhau thì render ra khác nhau

# Folder structure

```
src
|_components (shared components between features)
| |_Loading
|   |_index.jsx
|   |_styles.scss
|
|_features
| |_Todo
|   |_ components (components of feature Todo)
|   |_ pages (pages of feature Todo)
|   |_ index.jsx (entry point of feature Todo)
|
|_App.jsx
```

# Props Types

npm install --save prop-types

# Xoá những cái không dùng đến

Alt + Shift + o
