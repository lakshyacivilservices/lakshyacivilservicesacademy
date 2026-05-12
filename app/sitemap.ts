import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lakshyaquizacademy.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://lakshyaquizacademy.vercel.app/quiz/hrm",
      lastModified: new Date(),
    },
    {
      url: "https://lakshyaquizacademy.vercel.app/quiz/hrm/unit-1",
      lastModified: new Date(),
    },
  ];
}
