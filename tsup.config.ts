import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/index.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  external: ['canvas'],
}
