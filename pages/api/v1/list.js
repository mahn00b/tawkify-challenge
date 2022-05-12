import nookies from 'nookies'
import { MAX_ITEM_COUNT, COOKIE_KEY } from '../../../constants';

export default function listActions(req, res) {
  const cookies = nookies.get({ req })

  const list = cookies[COOKIE_KEY] ? JSON.parse(cookies[COOKIE_KEY]) : [];

  if (req.method === 'POST') {
    if (!req.body)
      return res.status(422).send('Unprocessable Entity')

    if (list.length === MAX_ITEM_COUNT) {
      return res.status(406).send('Not Acceptable');
    }

    list.push(req.body)

    nookies.set({ res }, COOKIE_KEY, JSON.stringify(list));

    return res.status(200).json(list);
  } else if (req.method === 'GET') {
    return res.status(200).json(list);

  } else if (req.method === 'DELETE') {
    let isDeleted = false;

    const newList = list.filter((item) => {
        if (item === req.body && !isDeleted) {
          isDeleted = true;

          return false;
        }

        return  true;
    });

    if (isDeleted) {
      nookies.set({ res }, COOKIE_KEY, JSON.stringify(newList));

      return res.status(200).json(newList)
    } else {
      return res.status(406).send('Not Acceptable')
    }

  } else if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'OPTIONS, POST, GET, DELETE')
    return res.send(204);
  } else {
    return res.status(404).send('Not Found');
  }
}
