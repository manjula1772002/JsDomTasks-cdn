import { resolve } from "path";
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        task1: resolve(__dirname, "./components/task-1/index.html"),
        task2: resolve(__dirname, "./components/task-2/index.html"),
        task3: resolve(__dirname, "./components/task-3/index.html"),
        task4: resolve(__dirname, "./components/task-4/index.html"),
        task5: resolve(__dirname, "./components/task-5/index.html"),
        task7: resolve(__dirname, "./components/task-7/index.html"),
        task8: resolve(__dirname, "./components/task-8/index.html"),
        task9: resolve(__dirname, "./components/task-9/index.html"),
        task10: resolve(__dirname, "./components/task-10/index.html"),
        task11: resolve(__dirname, "./components/task-11/index.html"),
        task12: resolve(__dirname, "./components/task-12/index.html"),
        task13: resolve(__dirname, "./components/task-13/index.html"),
        task14: resolve(__dirname, "./components/task-14/index.html"),
        task15: resolve(__dirname, "./components/task-15/index.html"),
        task16: resolve(__dirname, "./components/task-16/index.html"),
        task17: resolve(__dirname, "./components/task-17/index.html"),
        task18: resolve(__dirname, "./components/task-18/index.html"),
      }
    }
  },
  resolve: {
    alias: {
      '@components': '/components',
    },
  }
}); 