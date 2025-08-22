# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## สิ่งสำคัญที่ได้เรียนรู้ระหว่างทำ Repo นี้
- Deploy บน Vercel ไม่ควร push node_module ขึ้น github เพราะจะทำให้ CLI ของ Vercel ไม่สามารถเข้าถึงสิทธิ์ vite ได้
- หากใช้ Tailwind CSS ควรจัดวาง layout สำหรับ Mobile ก่อน เนื่องจาก Tailwind CSS เป็น Mobile-first //แม้ไม่ได้ใช้ tailwind css ก็ควรจัดวาง layout สำหรับ mobile ก่อน
