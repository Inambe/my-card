import Head from "next/head";
import { DiGithubBadge, DiGithubFull } from "react-icons/di";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="px-6 h-screen bg-purple-500 text-center flex items-center">
			<Head>
				<title>Inam.</title>
				<meta name="description" content="Inam." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="p-12 shadow-lg rounded-lg bg-white bg-opacity-95 md:w-[600px] mx-auto">
				<div className="tracking-tighter">
					<h1 className="font-bold text-4xl md:text-6xl">
						Inam Ul Huq
					</h1>
					<h2 className="text-xl md:text-2xl">
						Full-stack developer
					</h2>
				</div>

				<p className="mt-6 text-lg md:w-[360px] mx-auto">
					Hey there! I'm Inam. I build web, desktop, and mobile
					applications for a living.
				</p>

				<p className="mt-12 flex flex-col items-center justify-center gap-1">
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
