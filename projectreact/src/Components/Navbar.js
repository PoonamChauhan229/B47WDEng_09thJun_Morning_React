import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddAlertIcon from '@mui/icons-material/AddAlert';
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
      <Link className="nav-link" to='/addcolor'>Color-Game</Link>

       </div>
    </div>
    <Badge badgeContent={10} color="primary">
      <AddAlertIcon color="action" />
    </Badge>
  </div>
</nav>
    </>
  );
};

export default Navbar;
