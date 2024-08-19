import axios from "axios";
import { baseUrl } from "./endpoints";

export const addCard = (data, getData, setError) => {
  axios
    .post(baseUrl + "/cards", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      getData();
    })
    .catch((error) => {
      console.error("Failed to add card:", error);
      setError("Failed to add card. Please try again later.");
    });
};
