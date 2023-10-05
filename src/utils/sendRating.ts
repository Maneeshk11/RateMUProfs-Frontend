import axios from "axios";
import { SEND_RATING } from "../Constants/api";
import { SendRatingResponse } from "@/Constants/types";


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
  let respSendRating: SendRatingResponse;
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
      respSendRating =  {
        statuscode: response.status,
        bannedTime: response.data.banTime,
        message: response.data.response
      }
  } catch (error:any) {
    respSendRating =  {
      statuscode: error.response.status,
      bannedTime: error.response.data.banTime,
      message: error.response.data.response
    }
  }
  return respSendRating;
};
