import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFromReq } from "../../../lib/requests";
import Airtable from "airtable";
var base = new Airtable({ apiKey: 'patDYKszKeTdWq4pU.084d0bab958c8ce9e8cd9a188fce2851e58cb403e133a080374755bbc373a635' }).base('appB0d7A8w2VIUdyD')

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 1000)
    base('Furniture').select({
        pageSize: limit
    }).firstPage(function (err, records) {
        if (err) { console.error(err); return; }
        // records.forEach(function (record) {
        //     console.log('Retrieved', record.get('Name'));
        // });
        res.send(records)
    });
}