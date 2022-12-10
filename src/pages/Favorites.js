import { useContext } from 'react';

import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../components/store/favorites-context';

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);

    const favorites = favoritesCtx.favorites;

    return (
        <MeetupList meetups={favorites} title='Favorites' />
    );
}

export default Favorites;