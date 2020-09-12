const redirects = require('./src/lib/redirects')

module.exports = {
  async redirects() {
    return Object.entries(redirects).map(([key, value]) => ({
      source: `/${key}`,
      destination: value,
      permanent: false,
    }))
  },
}
