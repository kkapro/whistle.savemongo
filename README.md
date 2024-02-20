# whistle.savemongo
该插件用于将whistle的请求记录保存到mongo数据库中，方便后续分析。
### 安装
1. 该应用是whistle插件，需要先安装whistle：[https://github.com/avwo/whistle](https://github.com/avwo/whistle)
2. 安装插件：
    ```
    npm i -g whistle.savemongo
    ```
3. 安装后通过whistle的管理界面打开配置界面：
   配置连接mongo需要的host/port等信息：
    ![插件管理界面](/src/img/savemongo_config.png)

### 使用插件
配置后，在rules页面添加要匹配的请求配置规则：
```
    www.xxx.com pipe://savemongo
```
规则匹配后，whistle会将请求记录保存到mongo数据库中，在mongodb中可以查看相关记录
在测试过程中，可能使用的场景：
1. 统计接口覆盖率
2. 通过接口中的版本或日期字段，对比不同版本接口变化
3. 在线上环境回归时，过滤是否有测试环境的接口

### 字段说明
| 字段 | 类型 | 说明 |
|-----|-----|-----|
| id | String | whistle的请求唯一标识符 |
| fullUrl | String | 完整URL |
| method | String | HTTP请求方法 |
| url | String | 请求的URL地址 |
| protocol | String | 使用的协议（如HTTP或HTTPS） |
| host | String | 请求的主机名 |
| path | String | 请求的路径 |
| headers | Object | HTTP请求头信息 |
| res_body | Object | 响应体内容 |
| res_headers | Object | 响应头信息 |
| req | Object | 请求对象，包含请求相关的所有信息 |
| req_body | Object | 请求体内容 |
| req_params | Object | 请求参数 |
| client_ip | String | 客户端IP地址 |
| create_time | String | 创建时间 |

### 参考项目
whistle.autosave(https://github.com/whistle-plugins/whistle.autosave)
