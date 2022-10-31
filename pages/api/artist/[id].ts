import { NextApiRequest, NextApiResponse } from "next"
import { artists } from "../../../data/artists"
import { Artist } from "../../../types/artist"

type ResponseError = { message: string }

export default function artistHandler(
    req: NextApiRequest,
    res: NextApiResponse<Artist | ResponseError>
) {
    const { query } = req;
    const { id } = query;

    if (id === undefined) {
        return res.status(400).json({ message: 'bad request' });
    }

    const idNum : number = +id;
    const filtered = artists.filter((a) => a.id === idNum);

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `Artist with id: ${id} not found` });

}