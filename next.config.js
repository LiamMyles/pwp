module.exports = (phase) => {
  console.log("phase", phase)
  switch (phase) {
    case "phase-production-build": {
      return { basePath: "/pwp" }
    }
    case "phase-development-server": {
      return {}
    }
    default: {
      return {}
    }
  }
}
