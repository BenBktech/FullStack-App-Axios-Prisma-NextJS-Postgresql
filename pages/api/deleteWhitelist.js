import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  return new Promise(async(resolve) => {
    if(req.method === "POST") {
        const { id } = req.body;
        const deleteWhitelist = async(id) => {
            await prisma.whiteList.delete({
                where: {
                    id: parseInt(id)
                }
            })
            res.status(200).send({
                msg: "Wallet was added to the Whitelist"
            })
            resolve();
        }
        deleteWhitelist(id);
    }
  });
}

