import axios from "axios";

export const getBaserow = async (tableId: string) =>
  await axios({
    method: "GET",
    url: `https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true`,
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
