var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()

var config = {
  username: '${USER_NAME}',
  password: '${PASSWORD}',
  host: '${SERVER_HOST}',
  port: '${SERVER_PORT}',
  localRoot: __dirname + '/../src/.vuepress/dist',
  remoteRoot: '${SERVER_TARGET}',
  include: ['*']
}

ftpDeploy.deploy(config, function (err) {
  if (err) console.log(err)
  else console.log('finished')
})
