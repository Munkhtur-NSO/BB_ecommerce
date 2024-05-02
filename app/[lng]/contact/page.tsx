export const generateMetadata = async () => {
  return {
    metadataBase: new URL(`http://locahost:3000`),
    title: "Холбоо барих",
    description: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
    openGraph: {
      title: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
      description: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
      url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      siteName: "bloomza",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/images/fb_cover.png`,
          width: 1200,
          height: 628,
        },
      ],
      locale: "mn_MN",
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    },
  };
};

export default function Page() {
  return <h1>Hello, Холбоо</h1>;
}
