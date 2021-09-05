import React from "react";

const Employee = (props) => {
    const {firstName, lastName, age} = props
    return <h2> {`This is an employee: ${firstName} ${lastName} ${age}`} </h2>
}

export default Employee