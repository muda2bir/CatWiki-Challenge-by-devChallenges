import axios from "axios";

type makeRequestParameters = {
  url: string;
  params?: {
    breedId: string | string[] | undefined;
  };
};

export async function makeRequest(meters: makeRequestParameters) {
  if (meters.params !== undefined) {
    let response = await axios({
      method: "post",
      url: meters.url,
      data: {
        breedId: meters.params.breedId,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    return response;
  }
  let response = await axios.get(meters.url);
  return response;
}
