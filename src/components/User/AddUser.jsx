import React, { useRef, useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../../helpers/Wrapper'


export default function AddUser(props) {

    const nameInputRef = useRef()
    const ageInputRef = useRef()


    const [gender, setGender] = useState('male')
    const [error, setError] = useState()

    const submitHandler = (evnt) => {
        evnt.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredage = ageInputRef.current.value
        if (enteredName.trim().length === 0) {
            setError({ title: 'Invalid Username', message: 'Please Enter a valid username.' })
            return
        }
        if ((+enteredage < 1 || +age === 0)) {
            setError({ title: 'Invalid Age', message: 'Please enter a valid age.' })
        }

        if (gender !== 'male' && gender !== 'female') {
            return;
        }
        props.onAddUser(enteredName, enteredage, gender)

        setGender('male')
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }


    const genderChangeHandler = (evnt) => {
        setGender(evnt.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal clearError={errorHandler} title={error.title} message={error.message} />}

            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username: </label>
                    <input

                        id='username'
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years): </label>
                    <input
                        type="number"
                        id="age"
                        ref={ageInputRef}
                    />
                    <select value={gender} id='gender' onChange={genderChangeHandler}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}
