import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hahmlet } from "next/font/google";
import "./globals.css";

const hahmlet = Hahmlet({
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "유일한 포트폴리오",
    description: "유일한 포트폴리오에 어서오세요.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={hahmlet.className}>
                <div className="page-wrapper">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
