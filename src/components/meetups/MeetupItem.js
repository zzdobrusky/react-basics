import { useContext } from 'react';

import Card from '../ui/Card';
import FavoritesContext from '../store/favorites-context';

import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const isFavorite = favoritesCtx.isItemFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.address}</h3>
                    <address>{props.address}</address>
                    <div>{props.description}</div>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>

        </li>
    );
}

export default MeetupItem;