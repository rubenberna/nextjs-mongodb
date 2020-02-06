import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get( async (req, res) => {
  let doc = await req.db.collection('content').find({}).project({ URL: 1, CityPostalcode: 1, Breadcrumb1category: 1, Breadcrumb2category: 1, Breadcrumb3category: 1, Breadcrumb1: 1}).toArray()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(doc);
})

handler.post( async (req, res) => {
  const { asPath } = req.body
  const url = `www.taskbooker.be${asPath}`
  let doc = await req.db.collection('content').find({URL: url}).toArray()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(doc);
})

export default handler
