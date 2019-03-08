export const imports = {
  'app/components/Input/input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "app-components-input-input" */ 'app/components/Input/input.mdx')
}
