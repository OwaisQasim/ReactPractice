import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'


export default function UserList(props) {
    return (
        <Card className={classes.users}>
            <ul>{props.users.map(user => (
                <li key={user.id}>
                    {user.username}, {user.gender}, aged {user.age} (years)
                </li>
            ))}
            </ul>
        </Card>
    )
}


