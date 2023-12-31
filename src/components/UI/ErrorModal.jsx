import React from 'react'
import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'

export default function ErrorModal(props) {
    return (
        <div>
            <div onClick={props.clearError} className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.clearError}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}
