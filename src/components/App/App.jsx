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

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import NotFound from "../../pages/NotFound";
import Navigation from "../Navigation/Navigation";
import { fetchFilms } from "../../articles-api";
import { useEffect, useState } from "react";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

export default function App() {
  const [films, setFilms] = useState([]);

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

  // const peoples = [
  //   {
  //     id: 0,
  //     name: "Creola Katherine Johnson",
  //     profession: "chemist",
  //     accomplishment: "spaceflight calculations",
  //     imageId: "MK3eW3A",
  //   },
  //   {
  //     id: 1,
  //     name: "Mario José Molina-Pasquel Henríquez",
  //     profession: "chemist",
  //     accomplishment: "discovery of Arctic ozone hole",
  //     imageId: "mynHUSa",
  //   },
  //   {
  //     id: 2,
  //     name: "Mohammad Abdus Salam",
  //     profession: "chemist",
  //     accomplishment: "electromagnetism theory",
  //     imageId: "bE7W1ji",
  //   },
  //   {
  //     id: 3,
  //     name: "Percy Lavon Julian",
  //     profession: "chemist",
  //     accomplishment:
  //       "pioneering cortisone drugs, steroids and birth control pills",
  //     imageId: "IOjWm71",
  //   },
  //   {
  //     id: 4,
  //     name: "Subrahmanyan Chandrasekhar",
  //     profession: "chemist",
  //     accomplishment: "white dwarf star mass calculations",
  //     imageId: "lrWQx8l",
  //   },
  // ];

  // const filterChemist = peoples.filter(
  //   (peopel) => peopel.profession === "chemist"
  // );

  // function getImageUrl(person) {
  //   return "https://i.imgur.com/" + person.imageId + "s.jpg";
  // }

  // function ListItem({ peoples }) {
  //   return (
  //     <>
  //       <ul className={css.listChemist}>
  //         {peoples.map((peopel) => (
  //           <li key={peopel.id}>
  //             <img
  //               className={css.imgChemist}
  //               src={getImageUrl(peopel)}
  //               alt={peopel.name}
  //             />
  //             <p>
  //               <b>{peopel.name}:</b> {peopel.accomplishment}
  //             </p>
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  useEffect(() => {
    const dataFilms = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    dataFilms();
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={films.length > 0 && <Home films={films} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:id"
          element={films.length > 0 && <MovieDetailsPage />}
        >
          <Route path="review" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

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
