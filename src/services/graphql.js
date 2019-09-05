import axios from "axios";

export const graphQLService = async ({ method, query, props, endPoint }) => {
  const myQuery = {
    query: `
      query
      {
        ${query} {
          ${props.map(prop => prop)}
        }
      }
    `
  };

  const data = await axios({
    method,
    headers: {
      "Content-Type": "application/json"
    },
    url: ``,
    data: myQuery
  }).then(response => response.data);

  return data;
};
