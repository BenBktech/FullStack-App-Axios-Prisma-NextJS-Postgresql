import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  return new Promise(async(resolve) => {
    if (req.method === "GET") {
      const whiteListeds = await prisma.whiteList.findMany()
      res.status(200).send({data: whiteListeds})
    } else {
      res.status(405).end(`Method ${method} Not Allowed`);
      resolve();
    }
  });
}

