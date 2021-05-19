module.exports = (phase) => {
  switch (phase) {
    case "phase-production-build": {
      if (process.env.GH_PAGES_BUILD === "true") {
        return { basePath: "/pwp" }
      } else {
        return {}
      }
    }
    case "phase-development-server": {
      return { reactStrictMode: true }
    }
    default: {
      return {}
    }
  }
}
