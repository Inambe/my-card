import Head from "next/head";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
	return (
		<div
			className="px-6 h-screen text-center flex items-center"
			style={{
				background: "url(/geometric-g8b70ac0eb_1920.jpg)",
				backgroundSize: "cover",
			}}
		>
			<Head>
				<title>Inam.</title>
				<meta name="description" content="Inam." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="p-12 shadow-lg rounded-lg bg-white/70 backdrop-blur-sm md:w-[600px] mx-auto">
				<div className="tracking-tighter">
					<h1 className="font-bold text-4xl md:text-6xl">
						Inam Ul Huq
					</h1>
					<h2 className="text-xl md:text-2xl">
						Full-stack developer
					</h2>
				</div>

				<p className="mt-6 text-lg md:w-[360px] mx-auto leading-snug">
					Hey there! I{"'"}m Inam. I build web, desktop, and mobile
					applications for a living.
				</p>

				<p className="mt-8 flex flex-col items-center justify-center gap-1">
					<a
						href="https://github.com/Inambe"
						target="_blank"
						rel="noreferrer"
						className="hover:text-purple-500 flex items-center gap-1"
					>
						<DiGithubBadge size={26} />
						Inambe
					</a>
					<a
						href="mailto:inambe.dev@gmail.com"
						target="_blank"
						rel="noreferrer"
						className="hover:text-purple-500 flex items-center gap-1"
					>
						<MdOutlineMail size={20} />
						inambe.dev@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}
