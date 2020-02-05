import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

/* Apis only use server side, which we need to connect to mongodb
 use next-connect to give us a handler chain as well as allow us to chain middleware to the function
  (https://www.mongodb.com/blog/post/building-modern-applications-with-nextjs-and-mongodb)
*/
const handler = nextConnect();
handler.use(middleware);

handler.get( async (req, res) => {
  let doc = await req.db.collection('content').find({}).project({ URL: 1, CityPostalcode: 1, Breadcrumb1category: 1, Breadcrumb2category: 1, Breadcrumb3category: 1, Breadcrumb1: 1}).toArray()
  res.json(doc);
})

handler.post( async (req, res) => {
  console.log('got here');
  const { asPath } = req.body
  const url = `www.taskbooker.be${asPath}`
  let doc = await req.db.collection('content').find({URL: url}).toArray()
  res.json(doc);
})

export default handler
