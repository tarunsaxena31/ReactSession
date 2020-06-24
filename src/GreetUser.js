import React from 'react'

export default function GreetUser(props) {
    return (
        <div>
            Hello {props.uname}, your address is {props.address}
            <br/>
            {props.children}
        </div>
    )
}
GreetUser.defaultProps = {
    uname: "Tarun",
    address : "Pune"
}
