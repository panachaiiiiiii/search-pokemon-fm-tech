import "antd/dist/reset.css";
import "./globals.css";
import Providers from "./providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokémon Explorer App",
  icons: {
    icon: "/Pokeball.webp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
