import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

export default function AddUser(props) {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('male')
    const [error, setError] = useState()

    const submitHandler = (evnt) => {
        evnt.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({ title: 'Invalid Username', message: 'Please Enter a valid username.' })
        }
        if (+age < 1) {
            setError({ title: 'Invalid Age', message: 'Please enter a valid age.' })
        }

        if (gender !== 'male' && gender !== 'female') {
            return;
        }
        props.onAddUser(username, age, gender)
        setUsername('')
        setAge('')
        setGender('male')
    }

    const usernameChangeHandler = (evnt) => {
        setUsername(evnt.target.value)
    }

    const ageChangeHandler = (evnt) => {
        setAge(evnt.target.value)
    }

    const genderChangeHandler = (evnt) => {
        setGender(evnt.target.value)
    }

    return (
        <div>
            {error && <ErrorModal title='An Error occured!' message='Something went wrong.' />}

            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username: </label>
                    <input value={username} onChange={usernameChangeHandler} id='username' type="text" />
                    <label htmlFor="age">Age (years): </label>
                    <input value={age} type="number" id="age" onChange={ageChangeHandler} />
                    <select value={gender} id='gender' onChange={genderChangeHandler}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}
