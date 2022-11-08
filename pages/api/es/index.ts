// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Espa } from "../../../types/shared/Lang";
import es from "./esp.json";

export default function language(
  req: NextApiRequest,
  res: NextApiResponse<Espa>
) {
  res.status(200).json(es);
}
