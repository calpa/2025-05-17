import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.vue$/, /\.md$/, /\.tsx?$/, /\.jsx?$/],
    },
  },
})