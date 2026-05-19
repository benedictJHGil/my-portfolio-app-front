import type { Metadata } from "next";
import { Hahmlet } from "next/font/google";
import "./globals.css";
import "./modal.css";

const hahmlet = Hahmlet({
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "유일한 아카이브",
    description: "유일한 아카이브에 어서오세요.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={hahmlet.className}>
                <main className="page-wrapper">
                    {children}
                </main>
            </body>
        </html>
    );
}
