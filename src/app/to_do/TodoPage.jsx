import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import styles from "@/app/to_do/todo.module.css";

// AWS Amplify 関連
import { Amplify } from "aws-amplify";
import config from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import {
  createTodo,
  deleteTodo as deleteTodoMutation,
} from "@/graphql/mutations";
import { listTodos } from "@/graphql/queries";

// バリデーションスキーマ
import TodoValidationSchema from "./TodoValidationSchema";

// AWS Amplify の設定
Amplify.configure(config);

const client = generateClient();

const TodoPage = ({ signOut }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TodoValidationSchema),
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({ query: listTodos });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo(data) {
    try {
      if (!data.name || !data.description) return;
      const todo = { ...data };
      const response = await client.graphql({
        query: createTodo,
        variables: {
          input: todo,
        },
      });
      const newTodo = response.data.createTodo;
      setTodos([...todos, newTodo]);
      reset();
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  const [checked, setChecked] = useState({});

  const handleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completeTodo = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: checked[todo.id] ? true : todo.completed,
      }))
    );
    setChecked({});
  };

  const deleteTodo = async () => {
    const idsToDelete = todos
      .filter((todo) => checked[todo.id])
      .map((todo) => todo.id);
    await Promise.all(
      idsToDelete.map((id) =>
        client.graphql({
          query: deleteTodoMutation,
          variables: { input: { id } },
        })
      )
    );

    setTodos(todos.filter((todo) => !checked[todo.id]));
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo List</h1>
        <button className={styles.signOutButton} onClick={signOut}>
          Sign out
        </button>
      </div>
      <form onSubmit={handleSubmit(addTodo)}>
        <TextField
          {...register("name")}
          error={!!errors.name}
          label="name"
          variant="standard"
        />
        <TextField
          {...register("description")}
          error={!!errors.description}
          label="description"
          variant="standard"
        />
        <Button variant="contained" type="submit">
          追加
        </Button>
      </form>
      {todos.map((todo, index) => (
        <div
          key={todo.id ? todo.id : index}
          className={styles.todoItem}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <Checkbox
            checked={checked[todo.id] || false}
            onChange={() => handleCheck(todo.id)}
            className={styles.checkbox}
          />
          <div className={styles.name}>{todo.name}</div>
          <div className={styles.description}>{todo.description}</div>
        </div>
      ))}
      <Button variant="outlined" onClick={completeTodo}>
        完了
      </Button>
      <Button variant="outlined" onClick={deleteTodo}>
        削除
      </Button>
    </div>
  );
};

export default TodoPage;
