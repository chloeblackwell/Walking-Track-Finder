import React, { useState, useEffect } from "react";
import { Button, Card, CardDeck } from 'react-bootstrap';
import { getTracks } from "../../utils/trackFunctions";


function SearchResults() {



    useEffect(() => {
        getTracks();
    }, []);

    return (
        <div>
            <CardDeck >
                <Card>
                    <Card.Body>
                        <Card.Title>
                        </Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="primary">Add to favourites</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div >
    )
};






// Results of table rendered out into cards







export default SearchResults;
