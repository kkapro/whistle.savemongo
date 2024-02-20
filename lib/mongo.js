// const {MONGODB} = require('./config');
const mongoose = require("mongoose");
const { Schema } = mongoose;

function mongo_connect(MONGODB) {
  if(MONGODB.username){
    dbUrlstr = `mongodb://${MONGODB.username}:${MONGODB.password}@${MONGODB.host}:${MONGODB.port}/${MONGODB.database}`; 
  }else{
    dbUrlstr = `mongodb://${MONGODB.host}:${MONGODB.port}/${MONGODB.database}`;
  }
  const dbUrl = dbUrlstr;
  mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => {
    console.log('MongoDB connected...')
  })
  .catch((err) => {
    console.log("mongodb connect error 连接失败，请检查配置")
    // console.log(err)
  })

  mongoose
    .connection
    .on('disconnected', function () {
      console.log('Mongoose connection disconnected')
    })
}
const wsapilogSchema = new Schema({
    id: String,
    fullUrl: String,
    method: String,
    url:String,
    protocol: String,
    host: String,
    path: String,
    headers:Object,
    res_body: Object,
    res_headers:Object,
    req: Object,
    req_body: Object,
    req_params: Object,
    client_ip: String,
    create_time:String
}, { collection: "wsapilog" });

exports.WSApiLog = mongoose.model('wsapilog', wsapilogSchema, 'wsapilog');
exports.mongo_connect=mongo_connect;
// exports.mongo_status=mongoose.connection.readyState;
exports.mongoose=mongoose;