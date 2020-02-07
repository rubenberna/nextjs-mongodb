import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.post( async (req, res) => {
  const { category } = req.body
  let doc = await req.db.collection('content').find({Breadcrumb1: category}).project({ URL: 1, CityPostalcode: 1, Breadcrumb1category: 1, Breadcrumb2category: 1, Breadcrumb3category: 1, Breadcrumb1: 1}).limit(100).toArray()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(doc);
})

export default handler
