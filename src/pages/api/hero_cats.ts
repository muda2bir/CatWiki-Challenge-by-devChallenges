import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
const URL = `https://api.thecatapi.com/v1`;
import { HeroCatsType, CatObjType } from "./CatType.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeroCatsType[] | []>
) {
  let { data } = await axios.get(`${URL}/breeds?api_key=${process.env.API_KEY}`);

  const filteredData = data.filter((cat: CatObjType) => {
    return cat.image !== undefined;
  });

  let heroCats: HeroCatsType[] = [];

  for (let i = 0; i < filteredData.length; i++) {
    let catObj: HeroCatsType = {
      id: filteredData[i].id,
      name: filteredData[i].name,
      image_url: filteredData[i].image.url,
      description: filteredData[i].description
    };
    heroCats.push(catObj);
  }
  return res.json(heroCats);
}