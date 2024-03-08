import { Children, createContext, useEffect, useState } from "react";

interface TodoItem {
	userId: number;
	id: number;
	title: string;
	body: string;
	completed: boolean;
}

interface TodoList {
	todoList: TodoItem[];
}

export const AppContext = createContext({
	todoList: [],
});

type TypeAppContext = typeof AppContext;

interface Props {
	children: React.ReactNode;
}

export function ContextProvider({ children }: Props) {
	const [todoList, setTodoList] = useState([]);

	async function getStaticProps() {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();

		setTodoList(data);
	}

	useEffect(() => {
		getStaticProps();
	}, []);

	return (
		<AppContext.Provider value={{ todoList }}>{children}</AppContext.Provider>
	);
}
