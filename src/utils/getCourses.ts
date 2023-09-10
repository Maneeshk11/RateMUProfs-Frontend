import { GET_COURSES } from "../Constants/api";
import axios from "axios";

export const getCourses = async (profId: string) => {
  const resp = await axios.post(
    GET_COURSES,
    {
      professorID: profId,
    },
    {
      headers: {
        Authorization: `${localStorage.getItem("authToken")}`,
      },
    }
  );
  return resp.data.courses;
};
