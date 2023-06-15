import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to='/'>Movie-B47 React App</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
      <Link  className="nav-link" to='/'>Home</Link>
      <Link  className="nav-link" to='/addmovie'>Add Movie</Link>
      <Link className="nav-link" to='/colorgame'>Color-Game</Link>

       </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
