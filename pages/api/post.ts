// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

type posts = {
  id: number;
  title: string;
  createdAt: Date;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    client.user.findMany().then((posts: posts) => {
      res.status(200).json(posts);
    });
  }
}
