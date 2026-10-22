import html from "eslint-plugin-html";
import globals from "globals";

export default [
  {
  
    files: ["**/*.html", "**/*.js"],
    plugins: {
      html: html
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser 
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": "error",
      "no-alert": "off" 
    }
  }
];
