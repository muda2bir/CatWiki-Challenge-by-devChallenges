import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import {
  ErrorType,
  SpecificCatObjResponseType,
  SpecificCatObjType,
  SpecificCatsType,
} from "./CatType.types";
const URL = `https://api.thecatapi.com/v1`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpecificCatObjResponseType | { message: string }>
) {
  try {
    let { data: breedDetails }: { data: SpecificCatObjType[] } =
      await axios.get(
        `${URL}/images/search?breed_ids=${req.body.breedId}&api_key=${process.env.API_KEY}`
      );
    let { data: breedImages } = await axios.get(
      `${URL}/images/search?limit=8&breed_ids=${req.body.breedId}`
    );

    let breedImageFiltered = [];
    for (let i = 0; i < breedImages.length; i++) {
      let imgObj = {
        id: breedImages[i].id,
        url: breedImages[i].url,
      };
      breedImageFiltered.push(imgObj);
    }

    let mainApiObj = {
      name: breedDetails[0].breeds[0].name,
      description: breedDetails[0].breeds[0].description,
      img_url: breedDetails[0].url,
      temperament: breedDetails[0].breeds[0].temperament,
      origin: breedDetails[0].breeds[0].origin,
      life_span: breedDetails[0].breeds[0].life_span,
      adaptability: breedDetails[0].breeds[0].adaptability,
      affection_level: breedDetails[0].breeds[0].affection_level,
      child_friendly: breedDetails[0].breeds[0].child_friendly,
      grooming: breedDetails[0].breeds[0].grooming,
      intelligence: breedDetails[0].breeds[0].intelligence,
      health_issues: breedDetails[0].breeds[0].health_issues,
      social_needs: breedDetails[0].breeds[0].social_needs,
      stranger_friendly: breedDetails[0].breeds[0].stranger_friendly,
      other_photos: breedImageFiltered,
    };

    res.json(mainApiObj);
  } catch (e) {
    res.json({ message: "something went wrong!" });
  }
}
