import { GET_SINGLE_PROF_DETAILS } from "../Constants/api";
import axios from "axios";
import { Professor } from "../Constants/types";


export const getSingleProfDetails = async (
    profId: string,
) => {
    const resp = await axios.post(GET_SINGLE_PROF_DETAILS, {
        _id: profId,
    })
    return resp.data as Professor;
}