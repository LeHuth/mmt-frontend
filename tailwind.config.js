module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark'
  },
  content: [
    'node_modules/tailvue/dist/tailvue.es.js'
  ]
}
