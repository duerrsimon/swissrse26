import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'github-light',
      dark: 'monokai',
    },
    langs: ['python', 'bash', 'json', 'yaml', 'text'],
    transformers: [],
  }
})
