import PropTypes from 'prop-types'
//PropTypes imported
import {useLocation} from 'react-router-dom'
//Button component imported
import Button from './Button'
//Button component imported

const Header = ({title, date, onAdd, showAdd}) => {
    const location = useLocation()
    //variable location equal to the useLocation function
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* h1 for header with its text set as title */}
            <p>{date}</p>
            {/* p for header with its text set as date */}
            <br></br>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
            {/* if the location's pathname is equal to '/', a Button component with color, if showAdd is true, set as 'red', otherwise color is set as 'green', text, if showAdd is true, is set as 'Close', otherwise text is set as 'Add', and onClick set as the onAdd function, appears */}
        </header>
        //Header with header class
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
    //default title is Task Tracker
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    //title is required as a string
}

export default Header
