### 简介 & 目录

该项目为《9小时搞定微信小程序开发》课程的API章节示例源码，便于大家学习参考。

* client-api : API章节小程序项目根目录，存放了API章节的代码

* server-api : API章节中网络类API的服务端代码（基于nodejs实现）

### 如何部署启动

1. 将`client-api`目录下的`project.config.json`文件中**appid**替换为自己所申请的小程序appid

2. 在微信开发者工具上新建项目，将`client-api`目录作为小程序项目根目录，并填入appid及项目名称。

### 模块

| 目录名 | API模块 |
| -- | -- |
| Device | 设备 |
| File | 文件 |
| Interface | 界面 |
| Location | 位置 |
| Media | 媒体 |
| Network | 网络 |
| Storage | 本地缓存 |

### 网络类Server部署(以nginx为例)

> 确保已安装**nodejs**

* request / upload 服务部署(默认为`3003端口`)

`$ cd server-api/request_server`

`$ npm start`

* websocket 服务部署(默认为`3306端口`)

`$ cd server-api/websocket_server`

`$ node index.js`

### 如何使用Whislte抓包

安装whistle: `$ npm install -g whistle`

启动whistle: `$ whistle start` 或 `$ w2 start`

指定whistle启动端口: `$ whistle start -p [port]`

1. 修改开发者工具 菜单栏 -> 设置 -> 代理设置

2. 切换为“手动设置代理”，填入 ip: `127.0.0.1`, 端口: `[启动whistle时的端口]`

3. 若开发者工具弹出“当前系统代理不是安全代理，是否信任”，点击“确定”
