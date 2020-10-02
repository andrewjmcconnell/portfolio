module.exports = {
  apps : [{
    name       : "client",
    script     : "serve -s build",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    }
  }]
};
