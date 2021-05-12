import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {/* p for the footer with its text set as 'Copyright &copy; 2021' */}
            <p>Favorite Musician: Danny Elfman</p>
            {/* p for the footer with its text set as 'Favorite Musician: Danny Elfman' */}
            <Link to="/about">About</Link>
            {/* Link for the footer with to set as '/about' and its text set as 'About' */}
        </footer>
    )
}

export default Footer
