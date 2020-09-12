module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
      cta: '#FF3C3C',
      light: '#FFF',
      dark: '#0A0A0A'
    }
  },
  variants: {
    primary: ['hover', 'focus', 'active'],
    cta: ['hover', 'focus', 'active'],
    light: ['hover', 'focus', 'active'],
    dark: ['hover', 'focus', 'active']
  },
  plugins: [],
}