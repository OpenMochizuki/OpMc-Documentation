import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenMochizuki Documentation",
  description: "Documentation for OpenMochizuki, an open-source drum game inspired by various games found on SmileBASIC for the Nintendo Switch.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Charting', link: '/charting' },
      { text: 'Skinning', link: '/skinning' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Charting', link: '/charting' },
          { text: 'Skinning', link: '/skinning' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenMochizuki/opmc-documentation' }
    ]
  }
})
