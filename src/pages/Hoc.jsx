import React from 'react'

function Hoc(Component) {
    return (props) => {
        const style = {
            padding: "0.2rem",
            margin: "1rem",
            backgroundColor: "red",
        }
        return <Component style={style} {...props}/>
    }
}

export default Hoc