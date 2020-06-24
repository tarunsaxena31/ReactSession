import React, { Component } from 'react'
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'

const User =({match}) => <p>{match.params.id}</p>
            class Users extends React.Component {
                render () {
                    const {url} = this.props.match
                    return(
                        <div>
                            <h1>Users</h1>
                            <strong>Select a user</strong><br/>
                            <Link to="/users/1">User 1</Link>
                            <Link to="/users/2">User 2</Link>
                            <Link to="/users/3">User 3</Link>
                            <Route path="/users/:id" component={User}/>
                        </div>
                    )
                }
            }

// export default class Users extends Component {
//     render() {
//         return (
//             <div>
//                 Hello Users
//             </div>
//         )

//         const {params} = this.props.match
//             return(
//                 <div>
//                     <h1>Users</h1>
//                     <p>{params.id}</p>
//                 </div>
//             )            
//     }
// }
