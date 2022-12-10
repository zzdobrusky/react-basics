import { useRef } from 'react';

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const meetupData = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
            description: descriptionRef.current.value,
        }

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image URL</label>
                    <input type='url' required id='image' ref={imageRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required id='description' rows='5' ref={descriptionRef}/>
                </div>
                <div className={classes.actions}>
                    <button type='submit'>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;