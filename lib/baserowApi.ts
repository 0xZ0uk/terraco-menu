import axios from "axios";

class BaserowAPI {
  url: string;
  token?: string;

  constructor() {
    this.url = "https://api.baserow.io";
    this.token = process.env.NEXT_PUBLIC_API_TOKEN;
  }

  get(path: string) {
    axios({
      method: "GET",
      url: this.url + path,
      headers: {
        Authorization: `Token ${this.token}`,
      },
    });
  }
}

export default BaserowAPI;
