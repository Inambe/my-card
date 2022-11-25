import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const items = [
	{
		title: "Aut odit aut fugit, sed quia consequuntur magni dolores eos.",
		shortDescription:
			"Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.",
	},
	{
		title: "Nemo enim ipsam voluptatem quia voluptas sit?",
		shortDescription:
			"Int occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
	},
	{
		title: "Atur aut odit aut fugit, sed quia consequuntur magni do.",
		shortDescription:
			"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
	},
];

function BlogPage() {
	return (
		<div className="min-h-screen bg-lime-100 font-[inter]">
			<div className="w-[768px] max-w-full mx-auto px-4 py-16">
				<h1 className="text-5xl font-bold text-lime-700">Blog</h1>
				<div className="mt-16 space-y-8">
					{items.map(({ title, shortDescription }, i) => (
						<div key={i}>
							<a href="#">
								<h2 className="text-4xl font-semibold text-lime-800">
									{title}
								</h2>
							</a>
							<p className="mt-3 text-lg">
								{shortDescription}
								<a
									href="#"
									className={clsx(
										" inline-flex items-center gap-1 text-lime-600",
										shortDescription && "ml-2"
									)}
								>
									<p className="">Read more</p>
									<ArrowRightIcon height={20} width={20} />
								</a>
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogPage;
