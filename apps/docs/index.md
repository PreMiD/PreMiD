---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PreMiD"
  text: "Documentation"
  tagline: "The official documentation for PreMiD."
  image:
    src: /logo.svg
    alt: PreMiD Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: Presence Development
      link: /dev/getting-started
    - theme: alt
      text: Troubleshooting
      link: /troubleshooting
features:
  - icon: 🛠️
    title: Extensible
    details: Add Presences for your favorite websites and services. Or create your own!
  - icon: 🌐
    title: Cross-Platform
    details: PreMiD is available for all major browsers and platforms.
  - icon: 🚀
    title: Lightweight
    details: PreMiD is designed to be as lightweight as possible, so it won't slow down your system.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, rgb(209, 122, 254) 30%, rgb(89, 195, 246));

  --vp-home-hero-image-background-image: linear-gradient(-45deg, rgb(209, 122, 254) 50%, rgb(89, 195, 246) 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
