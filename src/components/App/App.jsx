// import TaskList from "../TaskList/TaskList";
// import initialTasks from "../../todo.json";
// import Form from "../Form/Form";
// import Filter from "../Filter/Filter";
// import { useState } from "react";
// import Error from "../Error/Error";
// import Loader from "../Loader/Loader";
// import SearchForm from "../SearchForm/SearchForm";
// import { fetchArticlesWithTopic } from "../../articles-api";
// import ArticleList from "../ArticleList/ArticleList";
// import Player from "../Player/Player";
// ================================================================== module 5
// import clsx from "clsx";
// import { Suspense, lazy } from "react";
// import { Routes, Route, NavLink } from "react-router-dom";
// import NotFound from "../../pages/NotFound/NotFound";
// const Home = lazy(() => import("../../pages/Home/Home"));
// const About = lazy(() => import("../../pages/About/About"));
// const ProductDetails = lazy(() =>
//   import("../../pages/ProductDetails/ProductDetails")
// );
// const Products = lazy(() => import("../../pages/Products/Products"));
// const Misison = lazy(() => import("../../pages/Misison/Misison"));
// const Team = lazy(() => import("../../pages/Team/Team"));
// const Reviews = lazy(() => import("../../pages/Reviews/Reviews"));

import Gallery from "../Gallery/Gallery";
import css from "./App.module.css";

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
      <h1>Amazing scientists</h1>
      <div className={css.containerApp}>
        <Gallery />
      </div>
    </div>
  );

  // <div>
  //   {/* <nav className={css.nav}>
  //   //     <NavLink to="/" className={buildLinkClass}>
  //   //       Home
  //   //     </NavLink>
  //   //     <NavLink to="/about" className={buildLinkClass}>
  //   //       About
  //   //     </NavLink>
  //   //     <NavLink to="/products" className={buildLinkClass}>
  //   //       Products
  //   //     </NavLink>
  //   //   </nav>
  //   //   <Suspense fallback={<div>Loading page...</div>}>
  //   //     <Routes>
  //   //       <Route path="/" element={<Home />} />
  //   //       <Route path="/about" element={<About />}>
  //   //         <Route path="mission" element={<Misison />} />
  //   //         <Route path="team" element={<Team />} />
  //   //         <Route path="reviews" element={<Reviews />} />
  //   //       </Route>
  //   //       <Route path="/products" element={<Products />} />
  //   //       <Route path="/products/:id" element={<ProductDetails />} />
  //   //       <Route path="*" element={<NotFound />} />
  //   //     </Routes>
  //   //   </Suspense> */}
  // </div>;
  // ================================================================module 5 ^^^^^
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
