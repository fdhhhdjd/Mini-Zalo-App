import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    root: "./src",
    base: "",
    plugins: [
      tsconfigPaths(),
      reactRefresh(),
    ],
    define: {
      "process.env": env,
    }
  });
};
