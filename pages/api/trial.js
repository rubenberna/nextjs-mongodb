import Cors from 'micro-cors'

const cors = Cors({
  allowMethods: ['GET', 'HEAD'],
})

function handler(req, res) {
  console.log(req.method);
  res.json({ message: 'Hello Everyone!' })
}

export default cors(handler)
