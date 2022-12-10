import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    // just for autocompletion
    addFavorite: (favoriteMeetup) => {}, 
    removeFavorite: (meetupId) => {},
    isItemFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favoriteMeetup));
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.filter(meetup => meetup.id !== meetupId))
    }

    function isItemFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isItemFavorite: isItemFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;