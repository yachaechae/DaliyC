import type { Metadata } from "next";
import { Jua, Judson } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DailyC",
	description: "오늘의 코디",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={jua.className}>
				<header className="h-75 flex items-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
					<div className={`${judson.className} container xl w-full flex justify-between items-center`}>
						<div className="flex items-center relative text-orange text-3xl gap-2">
							<Image src="/logo.svg" alt="Next.js Logo" width={50} height={50} priority />
							DailyC
						</div>
						<ul className="flex gap-8 text-2xl">
							<li>마이페이지</li>
							<li>로그인</li>
						</ul>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
