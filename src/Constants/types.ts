export interface Professor {
  _id: string;
  name: string;
  rating: number;
  teachingQuality: number;
  courses: Array<string>;
  dept: string;
  school: string;
  totRatings: number;
  courseQuality: number;
  helpfulness: number;
  responsiveness: number;
  userRatings: Array<Rating>;
  linkedin_link: string;
  googleScholar_link: string;
  muProfile_link: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  picture: string;
  ratings: Array<string>;
  sub: string;
}

export interface Rating {
  course: string;
  date: Date;
  feedback: string;
  helpfulness: number;
  courseQuality: number;
  teachingQuality: number;
  responsiveness: number;
  userId?: string;
  overallRating: number;
}

export interface SendRating {
  professorId: string;
  userId: string;
  rating: {
    courseQuality: number;
    responsiveness: number;
    lod: number;
    course: string;
    date: Date;
    helpfulness: number;
    feedback: string;
  };
}
