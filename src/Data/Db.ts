export type DataProps = {
  image: string;
  title: string;
  description: string;
};

const Data: DataProps[] = [
  {
    image: "/images/icon-snappy-process.svg",
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    image: "/images/icon-affordable-prices.svg",
    title: "Afforardable Prices",
    description:
      "We don´t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    image: "/images/icon-people-first.svg",
    title: "People First",
    description:
      "Our plans aren´t full of conditions and clauses to prevent payouts. We make sure you´re covered when you need it.",
  },
];

export default Data;
