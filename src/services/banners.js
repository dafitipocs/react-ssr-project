import { graphQLService } from "./graphql";

export function getBannersData() {
  try {
    const payload = graphQLService({
      query: 'banner (state: "SP") ',
      props: ["id"],
      endPoint: "api/banners"
    });
    return payload;
  } catch (err) {
    console.log(JSON.stringify(err.response.data));
  }
}
