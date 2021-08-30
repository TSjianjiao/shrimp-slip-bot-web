const path = require('path')
module.exports = {
  apps : [{
    name: 'shrimp-slip-bot-web',
    script: path.join(__dirname, 'backend', 'serverDist', 'server.min.js'),
    watch: false,
    env: {},
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '8.130.48.20',
      ref  : 'origin/main',
      repo : 'git@github.com:TSjianjiao/shrimp-slip-bot-web.git',
      path : '/usr/local/Code/shrimp-slip-bot-web',
      'pre-deploy-local': 'echo \'本地脚本!\'',
      'post-deploy' : 'echo \'开始部署\' && yarn && pm2 startOrRestart ecosystem.config.js --env production',
      'post-setup': 'echo \'克隆完成，设置成功!\'',
      'pre-setup': 'echo \'开始设置!\''
    }
  }
}
