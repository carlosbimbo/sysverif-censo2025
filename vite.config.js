import { defineConfig } from "vite";
import { buildPlugin } from 'vite-plugin-build';
import react from "@vitejs/plugin-react";
import { resolve } from 'path';
//import path from 'path';
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from 'vite-plugin-pages'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});


/*
export default defineConfig({
  base: '/reactappsysverif2023/',
  plugins: [react(),
    Pages({
      dirs: ['./src/pages']
    })
  ],
  build: {
    rollupOptions: {
      input: {
        Login: 'src/pages/Login.jsx'
      },
    },
  },
})
*/

/*
export default defineConfig({
  base: '/reactappsysverif2023/',
  plugins: [react(),Pages()],
  build: {
    rollupOptions: {
      input: {
        Login: 'src/pages/Login.jsx'
      },
    },
  },
})
*/

/*
const root = resolve(__dirname, 'src/pages')
const outDir = resolve(__dirname, 'dist')


export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('./', 'index.html'),
        Login: resolve(root, 'Login.jsx'),
      }
    }
  }
})
*/


/*
export default defineConfig({
  plugins: [react()],
  base: "http://144.126.132.44/reactappsysverif2023/",
  build: {
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
*/

/*
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
*/

/*
export default defineConfig({
  plugins: [
    react(),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['react'],
            output: { globals: { react: 'React' } },
          },
          lib: {
            entry: path.resolve(__dirname, 'src/main.jsx'),
            name: 'RbacComponents',
            fileName: (format) => `rbac-components.${format}.js`,
          },
        },
      },
    }),
  ],
});
*/

/*
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
	outDir: 'dist',
   assetsDir: 'public',
	publicDir: 'assets',
  rollupOptions: {
    external: ['react'],
    output: {
        globals: {
            react: 'React',           
        },
    },
},
},  
});
*/

/*
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
	outDir: 'dist',
   assetsDir: 'public',
	publicDir: 'assets'
},  
});
*/

/*
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
   assetsDir: 'public',
	publicDir: 'assets',
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom", "react-redux"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
*/