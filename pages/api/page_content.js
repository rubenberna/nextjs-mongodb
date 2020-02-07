import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.post( async (req, res) => {
  const { asPath } = req.body
  const url = `www.taskbooker.be${asPath}`
  let doc = await req.db.collection('content').find({URL: url}).toArray()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(doc);
})

export default handler
