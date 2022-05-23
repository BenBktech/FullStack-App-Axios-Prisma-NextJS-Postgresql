import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  return new Promise(async(resolve) => {
    if(req.method === "POST") {
        const { address } = req.body;
        const addToWhitelist = async(address) => {
            await prisma.whiteList.create({
                data: {
                    address,
                    balance: 0.5,
                    isFriend: false
                },
            })
            res.status(200).send({
                msg: "Wallet was added to the Whitelist"
            })
            resolve();
        }
        addToWhitelist(address);
        
    }
  });
}

