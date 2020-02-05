import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

/* Apis only use server side, which we need to connect to mongodb
 use next-connect to give us a handler chain as well as allow us to chain middleware to the function
  (https://www.mongodb.com/blog/post/building-modern-applications-with-nextjs-and-mongodb)
*/
const handler = nextConnect();
handler.use(middleware);

handler.get( async (req, res) => {
  let doc = await req.db.collection('content').findOne()
  res.json(doc);
})

handler.post( async (req, res) => {
  const { asPath } = req.body
  const url = `www.taskbooker.be${asPath}`
  let doc = await req.db.collection('content').find({URL: url}).toArray()
  res.json(doc);
})

export default handler
