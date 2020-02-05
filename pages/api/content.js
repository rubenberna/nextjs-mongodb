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
  console.log(doc);
  res.json(doc);
})

export default handler
