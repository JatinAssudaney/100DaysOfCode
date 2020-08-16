import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID z2ZOPq3p05raWui2a19MI9wKW-kNrhSyd8c2QQVd4hM",
  },
});
