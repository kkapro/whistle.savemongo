# whistle.savemongo
该插件用于将whistle的请求记录保存到mongo数据库中，方便后续分析。
### 安装
1. 该应用是whistle插件，需要先安装whistle：[https://github.com/avwo/whistle](https://github.com/avwo/whistle)
2. 安装插件：
    ```
    npm i -g whistle.savemongo
    ```
3. 安装后通过whistle的管理界面打开配置界面：
    ![插件管理界面]()

### 使用插件
安装后，可以添加要匹配的请求配置规则：
```
    www.xxx.com pipe://savemongo
```

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
