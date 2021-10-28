import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  // ES Modules
  {
    input: 'src/use-swap/index.ts',
    output: {
      file: 'dist/index.es.js', format: 'es',
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'] }),
    ],
  },

  // UMD
  {
    input: 'src/use-swap/index.ts',
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'reactUseSwap',
      indent: false,
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'], exclude: 'node_modules/**' }),
      terser(),
    ],
  },
]