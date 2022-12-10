import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-85239-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-TYpe': 'application/json'
                }
            }
        )
        .then(() => {
            navigate('/', { replace: true });
        });

    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetup;