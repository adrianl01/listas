import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFromReq } from "../../../lib/requests";
import { airtableBase } from "../../../lib/airtable";
import { productIndex } from "../../../lib/algolia";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { offset } = req.query;
    const { limit } = req.query;
    console.log("offset:", offset)
    console.log("limit:", limit)
    const strngOffset = JSON.parse(offset as string)
    const strngLimit = JSON.parse(limit as string)
    const results = await productIndex.search(req.query.search as string, { offset: strngOffset, length: strngLimit })

    res.send(
        {
            results,
            pagination: {
                offset: offset,
                limit: limit,
                total: results.nbHits
            }
        }
    )
}
