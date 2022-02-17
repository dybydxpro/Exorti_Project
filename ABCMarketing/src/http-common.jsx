import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7066/api",
    headers: {
        'Accept': 'application/json','Content-Type': 'application/json'
    }
  });

  //https://localhost:44375/api
  //https://localhost:44322/api
  //https://localhost:7066