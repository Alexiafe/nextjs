// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllCars } from "@/utils/database";
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
  const result = getAllCars();

  res.status(200).json({ result });
}
