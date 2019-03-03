module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Guillaume Gagnaire - Lead developer in Bordeaux, France",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  mode: "spa",
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: ["~/plugins/markdown"],
  modules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faBars", "faBriefcase", "faUser", "faHeart", "faAt", "faPhone"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faGithub", "faWpforms"]
          }
        ]
      }
    ]
  ]
};
