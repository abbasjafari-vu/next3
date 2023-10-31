import "globals.css";
import { Children } from "_types";
import localFont from "next/font/local";
const marko = localFont({
  src: "_assets/fonts/MarkoOne-Regular.ttf",
  display: "swap",
  variable: "--font-marko",
});
const dana = localFont({
  src: [
    { path: "_assets/fonts/dana/DanaFaNum-Light.woff", weight: "300" },
    { path: "_assets/fonts/dana/DanaFaNum-Medium.woff", weight: "500" },
    { path: "_assets/fonts/dana/DanaFaNum-DemiBold.woff", weight: "600" },
  ],
  display: "swap",
  variable: "--font-dana",
});

const moirai = localFont({
  src: "_assets/fonts/MoiraiOne-Regular.ttf",
  display: "swap",
  variable: "--font-moirai",
});

type Props = Children;
export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html className={`${marko.variable} ${moirai.variable} ${dana.variable} `}>
      <body>{children}</body>
    </html>
  );
}
