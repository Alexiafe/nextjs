// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCarById } from "@/utils/database";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  color: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id; // gets the id parameter value
  const result = getCarById(id as string);

  res.status(200).json({ result });
}
