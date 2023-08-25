
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
    linkedin_link: string,
    googleScholar_link: string,
    muProfile_link: string
}

export interface User {
    _id: string;
    email: string;
    name: string;
    picture: string;
    ratings: Array<string>;
    sub: string;
}