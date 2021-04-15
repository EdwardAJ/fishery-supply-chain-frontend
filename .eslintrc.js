module.exports = {
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    quotes: [2, "double"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: ["nuxt", "nuxt-link", "nuxt-child", "no-ssr"]
      }
    ],
    "vue/no-v-html": 0,
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      }
    ]
  }
}
