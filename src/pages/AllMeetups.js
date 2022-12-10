import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://react-getting-started-85239-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(data => {
                const meetups = data ? Object.entries(data).map(([key, value]) => ({ id: key, ...value })) : [];
                setLoading(false);
                setData(meetups);
            })
    }, [])

    if (loading) {
        return (
            <section>Loading...</section>
        );
    }

    return (
        <MeetupList meetups={data} title='Meetups' />
    );
}

export default AllMeetupsPage;