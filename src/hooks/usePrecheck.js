import Axios from "axios";

const usePrecheck = async () => {
  try {
    const res = await Axios({
      method: "POST",
      url: "http://localhost:8000/preCheckToken",
      withCredentials: true,
    });
    if (res) {
      /* console.log("usePrecheck: ", res.data.message); */
      return res.data.message;
    }
  } catch (err) {
    console.log("res: ", err.response.data.error);
    return err.response.data.error;
  }
};

export default usePrecheck;
