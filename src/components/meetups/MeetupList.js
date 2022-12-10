import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            <ul className={classes.list}>
                {props.meetups.length > 0
                    ?
                    props.meetups.map(meetup => (
                        <MeetupItem
                            key={meetup.id}
                            id={meetup.id}
                            image={meetup.image}
                            address={meetup.address}
                            description={meetup.descripton}
                        />))
                    :
                    <div>No {props.title} available. Start adding some?</div>
                }
            </ul>
        </section>

    );
}

export default MeetupList;