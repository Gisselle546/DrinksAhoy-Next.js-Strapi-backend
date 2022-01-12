// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {fetchQuery} from '../../utils/fetchqueries';

type Data = {
  name: string
}

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const post = await fetchQuery('beers')

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({name:'invalid' })
  }




  res.status(200).json({ name: 'John Doe' })
}
