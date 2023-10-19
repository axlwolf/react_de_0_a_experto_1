import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
	reducePath: "todos",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://jsonplaceholder.typicode.com",
	}),

	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => "/todos",
		}),
		getTodo: builder.query({
			query: (todoId) => `/todos/${todoId}`,
		}),
	}),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
