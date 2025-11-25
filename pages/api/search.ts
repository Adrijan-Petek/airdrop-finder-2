import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  ok: boolean;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ ok: true, message: 'Search API is working' });
}