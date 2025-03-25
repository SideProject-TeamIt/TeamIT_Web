import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      import: require("eslint-plugin-import"),
    },
    rules: {
      "import/no-unresolved": "error",
      "import/order": ["warn", { "groups": ["builtin", "external", "internal"] }],
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./"]],
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
];


export default eslintConfig;

