import PropTypes from 'prop-types'
//PropTypes imported

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
        //button with an nClick of onClick, a backgroundColor of color, a className of 'btn', and the text set as text
    )
}

Button.defaultProps = {
    color: 'steelblue'
    //default color is 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    //text is a string
    color: PropTypes.string,
    //color is a string
    onClick: PropTypes.func.isRequired,
    //text is a function
}

export default Button
