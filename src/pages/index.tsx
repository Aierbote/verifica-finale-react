import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useContext } from "react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AppContext } from "@/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { todoList } = useContext(AppContext);

	if (!todoList) {
		return <div>Loading ToDos...</div>;
	}

	return (
		<>
			<h1>Posts</h1>
			<ul>
				{todoList.map(({ id, completed, title }) => (
					<li key={id}>
						<input type="checkbox" checked={completed} />
						<label>{title}</label>
					</li>
				))}
			</ul>
		</>
	);
}
