import React from 'react'

function WithoutJSX(){

    return(
        //<div id="myDiv"><h1 id="myH1">Hello World</h1></div>
        React.createElement("div", {id:'myDiv'}, React.createElement("h1",{id:'myH1'},"Hello World"))
    )
}

export default WithoutJSX