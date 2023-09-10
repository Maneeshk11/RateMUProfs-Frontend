import axios from "axios";
import { SEND_RATING } from "../Constants/api";

export const sendRatingDetails = async (
  professorId: string,
  userId: string,
  courseQuality: number,
  responsiveness: number,
  teachingQuality: number,
  course: string,
  date: string,
  helpfulness: number,
  feedback: string
) => {
  let statusCode;
  try {
    const response = await axios
      .post(
        SEND_RATING,
        {
          professorID: professorId,
          userID: userId,
          rating: {
            courseQuality: courseQuality,
            responsiveness: responsiveness,
            teachingQuality: teachingQuality,
            course: course,
            date: date,
            helpfulness: helpfulness,
            feedback: feedback,
          },
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("authToken")}`,
          },
        }
      )
      statusCode = response.status;
  } catch (error:any) {
    statusCode = error.response.status;
  }
  return statusCode;
};
