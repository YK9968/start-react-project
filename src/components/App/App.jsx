// import TaskList from "../TaskList/TaskList";
// import initialTasks from "../../todo.json";
// import Form from "../Form/Form";
// import Filter from "../Filter/Filter";
// import css from "./App.module.css";
// import { useState } from "react";
// import Error from "../Error/Error";
// import Loader from "../Loader/Loader";
// import SearchForm from "../SearchForm/SearchForm";
// import { fetchArticlesWithTopic } from "../../articles-api";
// import ArticleList from "../ArticleList/ArticleList";
// import Player from "../Player/Player";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import NotFound from "../NotFound/NotFound";
import css from "./App.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function App() {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
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
  // const handleSearch = async (topic) => {
  //   try {
  //     setArticles([]);
  //     setLoading(true);
  //     setError(false);
  //     const data = await fetchArticlesWithTopic(topic);
  //     setArticles(data);
  //   } catch {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  // const [query, setQuery] = useState("");
  // const [clicks, setClicks] = useState(0);

  // const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <div>
      <nav className={css.navApp}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );

  // <div>
  //   <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
  // </div>
  // <div>
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     Number of clicks: {clicks}
  //   </button>
  //   <ul>
  //     {filteredPlanets.map((planet) => (
  //       <li key={planet}>{planet}</li>
  //     ))}
  //   </ul>
  //   <SearchForm onSubmit={handleSearch} />
  //   {loading && <Loader />}
  //   {error && <Error />}
  //   {articles.length > 0 && <ArticleList items={articles} />}
  // </div>
  // <div className={css.container}>
  //   <Form onAdd={addTask} />
  //   <Filter value={filter} onFilter={setFilter} />
  //   <TaskList tasks={visibleTasks} onDelete={deleteTask} />
  // </div>
}
