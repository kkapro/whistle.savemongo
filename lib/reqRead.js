const {WSApiLog,mongo_connect,mongoose} = require('./mongo');
module.exports = (server, { storage, config }) => {
    var MONGODB={}
    MONGODB.host=storage.getProperty('host')
    MONGODB.port=storage.getProperty('port')
    MONGODB.username=storage.getProperty('username')
    MONGODB.password=storage.getProperty('password')
    MONGODB.database=storage.getProperty('database')
    mongo_connect(MONGODB)
    
    server.on('request', (req, res) => {
      let body;
      req.on('data', (data) => {
        body = body ? Buffer.concat([body, data]) : data;
      });
      req.on('end', () => {
        var status=mongoose.connection.readyState;
        if(status==1){
        var apilog=new WSApiLog(req.originalReq)
        apilog.req=req.originalReq
        fullurl=req.originalReq.fullUrl
        apilog.client_ip=req.originalReq.remoteAddress
        const url = new URL(fullurl);
        apilog.protocol=url.protocol
        apilog.host=url.host
        apilog.path=url.pathname
        apilog.req_params=url.searchParams.toString()
        params=fullurl.split('?')
        if (params.length>1){
          apilog.url=params[0]
        }
        if (body) {
          if (req.originalReq.headers['content-type'].includes("json")){
            apilog.req_body=JSON.parse(body.toString('utf-8'))
          }
          apilog.save()
          req.end(body);
        } else {
          apilog.save()
          req.end();
        }
      }});
     
      req.pipe(res);
    });
};
