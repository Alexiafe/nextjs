// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const data = [
    {
      id: "ford",
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1551830820-330a71b99659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: "lambo",
      color: "orange",
      image:
        "https://images.unsplash.com/photo-1519440862171-af26cf8c2a85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    },
    {
      id: "tesla",
      color: "white",
      image:
        "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  const id = req.query.id; // gets the id parameter value
  const result = data.find((item) => item.id === id);

  res.status(200).json({ result });
}
