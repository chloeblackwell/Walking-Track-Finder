import React from 'react';
import { useAppContext } from '../../../store/index';
import { useLoginCheck } from '../../../utils/setAuthToken';
import FavouritesList from "../../favourites/favourites";


function DashBoard() {
    const [state, appDispatch] = useAppContext();
    console.log(state);

    useLoginCheck(appDispatch);

    return (
        <div className="container-fluid pl-0">
            <div>
                <h1>
                    Welcome {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="mr-5">

                    <h2 className="text-center">
                        View Favourites
                    </h2>
                    < FavouritesList />
                </div>
            </div>
        </div>
    );

}

export default DashBoard;