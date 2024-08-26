import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"

export default methods({
    post(req: NextApiRequest, res: NextApiResponse) {
        const user = {
            email: "",
            id: "",
            cart: ["1234"],
        };
        const cart = user.cart;
        cart.push(req.body.productId);
        res.send(user)
    }
})
