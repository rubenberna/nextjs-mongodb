import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import { MongoClient } from 'mongodb';
import Cors from 'micro-cors'

const client = new MongoClient(process.env.mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cors = Cors({
  allowMethods: ['GET', 'HEAD', 'POST'],
})

/* Apis only use server side, which we need to connect to mongodb
 use next-connect to give us a handler chain as well as allow us to chain middleware to the function
  (https://www.mongodb.com/blog/post/building-modern-applications-with-nextjs-and-mongodb)
*/

async function handler(req, res) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.mongodb_db);

  switch (req.method) {
    case 'GET':
      let list = await req.db.collection('content').find({}).project({ URL: 1, CityPostalcode: 1, Breadcrumb1category: 1, Breadcrumb2category: 1, Breadcrumb3category: 1, Breadcrumb1: 1}).toArray()
      res.json(list);
      break;
    case 'POST':
      const { asPath } = req.body
      const url = `www.taskbooker.be${asPath}`
      let doc = await req.db.collection('content').find({URL: url}).toArray()
      res.json(doc);
      break;
    default:
      return
  }
}

// const handler = nextConnect();
// handler.use(middleware);
//
// handler.get( async (req, res) => {
//   let doc = await req.db.collection('content').find({}).project({ URL: 1, CityPostalcode: 1, Breadcrumb1category: 1, Breadcrumb2category: 1, Breadcrumb3category: 1, Breadcrumb1: 1}).toArray()
//   res.json(doc);
// })
//
// handler.post( async (req, res) => {
//   const { asPath } = req.body
//   const url = `www.taskbooker.be${asPath}`
//   let doc = await req.db.collection('content').find({URL: url}).toArray()
//   res.json(doc);
// })

export default cors(handler)
