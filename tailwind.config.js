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
      theme: 'var(--color-theme)',
      text: 'var(--color-text)',
    }
  },
  variants: {
    primary: ['hover', 'focus', 'active'],
    text: ['hover', 'focus', 'active'],
    theme: ['hover', 'focus', 'active']
  },
  plugins: [],
}