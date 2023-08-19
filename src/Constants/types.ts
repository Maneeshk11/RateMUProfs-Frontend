
export interface Professor {
    _id: string;
    name: string;
    rating: number;
    lod: number;
    courses: Array<string>;
    dept: string;
    school: string;
    totRatings: number;
    courseQuality: number;
    helpfulness: number;
    responsiveness: number;
    userRatings: Array<string>;
}