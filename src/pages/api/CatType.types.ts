export type HeroCatsType = {
  id: string;
  name: string;
  image_url: string;
  description: string;
};

type ImageObjectType = {
  id: string;
  url: string;
};

export type SpecificCatsType = {
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  other_photos: ImageObjectType[];
};

export type CatObjType = {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

export type SpecificCatObjType = {
  breeds: [
    {
      weight: {
        imperial: string;
        metric: string;
      };
      id: string;
      name: string;
      cfa_url: string;
      vetstreet_url: string;
      vcahospitals_url: string;
      temperament: string;
      origin: string;
      country_codes: string;
      country_code: string;
      description: string;
      life_span: string;
      indoor: number;
      lap: number;
      alt_names: string;
      adaptability: number;
      affection_level: number;
      child_friendly: number;
      dog_friendly: number;
      energy_level: number;
      grooming: number;
      health_issues: number;
      intelligence: number;
      shedding_level: number;
      social_needs: number;
      stranger_friendly: number;
      vocalisation: number;
      experimental: number;
      hairless: number;
      natural: number;
      rare: number;
      rex: number;
      suppressed_tail: number;
      short_legs: number;
      wikipedia_url: string;
      hypoallergenic: number;
      reference_image_id: string;
    }
  ];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type ErrorType = {
  message: string;
};

export type SpecificCatObjResponseType = {
  name: string;
  description: string;
  img_url: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  other_photos: {
    id: string;
    url: string;
  }[];
};
