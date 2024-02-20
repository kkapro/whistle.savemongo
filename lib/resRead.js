const {WSApiLog,mongoose} = require('./mongo');
module.exports = (server , options) => {
  server.on('request', (req, res) => {
    let body;
    req.on('data', (data) => {
      body = body ? Buffer.concat([body, data]) : data;
    });
    req.on('end', async () => {
      if (body) {
        var status=mongoose.connection.readyState;
        if(status==1){
          const oid=req.originalReq.id
          var apilog=null;
          apilog=await WSApiLog.findOne({ "req.id": oid }).exec();
          if (!apilog){
            apilog=new WSApiLog(req.originalReq)
          }
          if (req.originalReq.headers['content-type'].includes("json")){
            apilog.res_body=JSON.parse(body.toString('utf-8'))
          }
          apilog.res_headers=req.headers
          const timestamp = Math.floor(Date.now() / 1000);
          apilog.create_time=timestamp
          apilog.save()
        }
        res.end(Buffer.from(body.toString(), 'utf-8'));
      } else {
        res.end();
      }
    });
  });
};
