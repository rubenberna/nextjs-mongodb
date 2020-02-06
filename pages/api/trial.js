import Cors from 'micro-cors'

const cors = Cors({
  allowMethods: ['GET', 'HEAD'],
})

function handler(req, res) {
  res.json({ message: 'Hello Everyone!' })
}

export default cors(handler)
