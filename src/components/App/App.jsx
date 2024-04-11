// import TaskList from "../TaskList/TaskList";
// import initialTasks from "../../todo.json";
// import Form from "../Form/Form";
// import Filter from "../Filter/Filter";
// import css from "./App.module.css";

import { useState } from "react";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticlesWithTopic } from "../../articles-api";
import ArticleList from "../ArticleList/ArticleList";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState("");
  // const addTask = (newTask) => {
  //   setTasks((prevTask) => {
  //     return [...prevTask, newTask];
  //   });
  // };
  // const deleteTask = (taskId) => {
  //   setTasks((prevTask) => {
  //     return prevTask.filter((task) => task.id !== taskId);
  //   });
  // };
  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(filter.toLowerCase())
  // );
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setLoading(true);
      setError(false);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
  // <div className={css.container}>
  //   <Form onAdd={addTask} />
  //   <Filter value={filter} onFilter={setFilter} />
  //   <TaskList tasks={visibleTasks} onDelete={deleteTask} />
  // </div>
}
