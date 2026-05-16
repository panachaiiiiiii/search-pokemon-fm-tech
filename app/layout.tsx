

import "antd/dist/reset.css";
import "./globals.css";
import Providers from "./providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
    >
      <body className="bg-gray-800" >
        <AntdRegistry>
        <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}