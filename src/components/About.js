import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* h4 with its text set as 'Version 1.0.0' */}
            <Link to='/'>Go Back</Link>
            {/* Link for the footer with to set as '/' and its text set as 'Go Back' */}
        </div>
    )
}

export default About
