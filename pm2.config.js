module.exports = {
  apps : [
    {
      name   : "analytics",
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: "production"
      },
      cwd: "/var/www/path_to_dist",
      "log_date_format" : "YYYY-MM-DD HH:mm Z"
    }
  ]
}