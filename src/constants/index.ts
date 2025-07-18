// export const CV_URL =
//   "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030578/personal-website/cv.jpg";

export const CV_URL = "/CV.pdf";

export const PROFILE_PICTURE_URL =
  "https://res.cloudinary.com/djsdnb4td/image/upload/v1741970815/52680417-41c4-4fdb-84e2-d796338c102a_q5ocvl.jpg";

export const DISOCRD_PROFILE =
  "https://res.cloudinary.com/djsdnb4td/image/upload/v1733302383/follow_z8vs4u.jpg";

export const BLOG_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://yogaviveka.vercel.app/api/blog"
    : "http://localhost:3000/api/blog";

export const PAGESPEED_CATEGORIES =
  "&category=accessibility&category=performance&category=best-practices&category=seo";

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_WEEK_IN_SECONDS = ONE_DAY_IN_SECONDS * 7;
export const REVALIDATE_INTERVAL = ONE_WEEK_IN_SECONDS;
