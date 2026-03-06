// import {resolve} from "path"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // build:{
  //   rollupOptions:{
  //     input:{
  //       task1:resolve(__dirname,"task/task-1/index.html"),
  //       task2:resolve(__dirname,"task/task-2/index.html"),
  //       task3:resolve(__dirname,"task/task-3/index.html"),
  //       task4:resolve(__dirname,"task/task-4/index.html"),
  //       task5:resolve(__dirname,"task/task-5/index.html"),
  //       task7:resolve(__dirname,"task/task-7/index.html"),
  //       task8:resolve(__dirname,"task/task-8/index.html"),
  //       task9:resolve(__dirname,"task/task-9/index.html"),
  //       task10:resolve(__dirname,"task/task-10/index.html"),
  //       task11:resolve(__dirname,"task/task-11/index.html"),
  //       task12:resolve(__dirname,"task/task-12/index.html"),
  //       task13:resolve(__dirname,"task/task-13/index.html"),
  //       task14:resolve(__dirname,"task/task-14/index.html"),
  //       task15:resolve(__dirname,"task/task-15/index.html"),
  //       task16:resolve(__dirname,"task/task-16/index.html"),
  //       task17:resolve(__dirname,"task/task-17/index.html"),
  //       task18:resolve(__dirname,"task/task-18/index.html"),
  //     }
  //   }
  // }
}) 