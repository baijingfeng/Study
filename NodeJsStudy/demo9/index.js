const os = require("os")

console.log(os.cpus()) // 打印出本机的CPU信息

console.log(os.totalmem() / 1024 / 1024 / 1024) // 打印出本机的内存信息
