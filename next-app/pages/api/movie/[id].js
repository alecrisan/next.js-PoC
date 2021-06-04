import { find } from './db';

export default function movieHandler(req, res) {
  const {
    query: { id },
    method,
  } = req
  switch (method) {
    case 'GET':
      const item = find({ id });
      if (item) {
        res.status(200).json(item)
      } else {
        res.status(404).end('Not found')
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
