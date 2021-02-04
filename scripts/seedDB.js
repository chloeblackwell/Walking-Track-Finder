require('dotenv').config();
let mongoose = require("mongoose");
let Track = require("../models/Track");

mongoose.connect(process.env.MONGODB_URI || "", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});



let trackSeed = [
    {
        img: {
            url: "./images/Engadine-to-Audley.jpeg"
        },
        track_name: "Engadine to Audley",
        track_location: "Engadine NSW",
        track_distance: "5.8km One Way"
    },
    {
        img: {
            url: "./images/Garie-Beach-to-Helensburgh-The-Burgh-Track.jpeg"
        },
        track_name: "Garie Beach to Helensburgh",
        track_location: "Garie Beach NSW",
        track_distance: "11km One Way"
    },
    {
        img: {
            url: "./images/Wentworth Falls Loop.jpg"
        },
        track_name: "Wentworth Falls Loop",
        track_location: "Wentworth Falls NSW",
        track_distance: "10km"
    },
    {
        img: {
            url: "./images/GarawarraFarm.jpeg"
        },
        track_name: "Garrawarra Car Park to Figure Eight Pools",
        track_location: "Royal National Park NSW",
        track_distance: "6km"
    },
    {
        img: {
            url: "./images/Bundeena to Marley Beach.jpg"
        },
        track_name: "Bundeena to Marley Beach",
        track_location: "Bundeena NSW",
        track_distance: "12.7km"
    },
    {
        img: {
            url: "./images/coastal-track-01.jpg"
        },
        track_name: "The Coast Track",
        track_location: "Royal National Park NSW",
        track_distance: "27.4km One Way"
    },
    {
        img: {
            url: "./images/furber-steps-scenic-railway-walk-01.jpg"
        },
        track_name: "Furber Steps Scenic Railway",
        track_location: "Blue Mountains NSW",
        track_distance: "869m Circuit"
    },
    {
        img: {
            url: "./images/Scenic World to Katoomba Falls.jpg"
        },
        track_name: "Scenic World to Katoomba Falls Lookout",
        track_location: "Katoomba NSW",
        track_distance: "1.2km"
    },
    {
        img: {
            url: "./images/Devils Hole Trail.jpg"
        },
        track_name: "Devils Hole Trail",
        track_location: "Katoomba NSW",
        track_distance: "7km One Way"
    },
    {
        img: {
            url: "./images/Ruined Caslte Walk.jpg"
        },
        track_name: "Ruined Castle Walk",
        track_location: "Katoomba NSW",
        track_distance: "7.9km"
    },
    {
        img: {
            url: "./images/Hunter Lookout.jpeg"
        },
        track_name: "Hunter Lookout and Great North Walk Loop",
        track_location: "Hunter Region NSW",
        track_distance: "5.6km Circuit"
    },
    {
        img: {
            url: "./images/CharlestownPark.jpeg"
        },
        track_name: "Charlestown Park Trackhead to Newcastle",
        track_location: "Newcastle NSW",
        track_distance: "12.1km One Way"
    },
    {
        img: {
            url: "./images/Deep Pass Trail.jpg"
        },
        track_name: "Deep Pass Trail",
        track_location: "Lithgow NSW",
        track_distance: "1.9km One Way"
    },
    {
        img: {
            url: "./images/Glow Worm Tunnel.jpeg"
        },
        track_name: "Glow Worm Tunnel Walk",
        track_location: "Lithgow NSW",
        track_distance: "2.9km"
    },
    {
        img: {
            url: "./images/Nayook Canyon Bushtrack.jpg"
        },
        track_name: "Nayook Canyon Bushtrack",
        track_location: "Lithgow NSW",
        track_distance: "2.2km Circuit"
    },
    {
        img: {
            url: "./images/Minnamurra Falls.jpg"
        },
        track_name: "Minnamurra Falls Walk",
        track_location: "Jamberoo NSW",
        track_distance: "3.7km"
    },
    {
        img: {
            url: "./images/Jump Rock.jpg"
        },
        track_name: "Jump Rock Falls Walk",
        track_location: "Macquarie Pass NSW",
        track_distance: "3.5km"
    },
    {
        img: {
            url: "./images/Sublime Point.jpg"
        },
        track_name: "Sublime Point Walking Track",
        track_location: "Austinmer NSW",
        track_distance: "2.4km"
    },
    {
        img: {
            url: "./images/Wodi Wodi Track.jpg"
        },
        track_name: "Wodi Wodi Track",
        track_location: "Stanwell Park NSW",
        track_distance: "5.8km"
    },
    {
        img: {
            url: "./images/grand-canyon-track.jpg"
        },
        track_name: "Grand Canyon Track",
        track_location: "Blue Mountains NSW",
        track_distance: "5.8km"
    },
    {
        img: {
            url: "./images/Wong Walk.jpg"
        },
        track_name: "Wonga Walk",
        track_location: "Dorrigo NSW",
        track_distance: "6km"
    },
    {
        img: {
            url: "./images/thirlmere-lakes-track-01.jpg"
        },
        track_name: "Thirlmere Lakes Track",
        track_location: "Thirlmere NSW",
        track_distance: "6.3km"
    },
    {
        img: {
            url: "./images/Mount Fairy.jpg"
        },
        track_name: "Mount Fairy Trail",
        track_location: "Kyogle NSW",
        track_distance: "3.2km"
    },
    {
        img: {
            url: "./images/the-governor-walk.jpg"
        },
        track_name: "The Governor Summit Track",
        track_location: "Mount Katutar National Park NSW",
        track_distance: "1.9km"
    },
    {
        img: {
            url: "./images/sixty foot falls.jpg"
        },
        track_name: "Sixty Foot Falls",
        track_location: "Mittagong NSW",
        track_distance: "3.5km"
    },
    {
        img: {
            url: "./images/tomaree-head-summit-walk-01.jpg"
        },
        track_name: "Tomaree Head Summit Walk",
        track_location: "Tomaree National Park NSW",
        track_distance: "2.1km"
    },
    {
        img: {
            url: "./images/sawn-rocks-hero.jpg"
        },
        track_name: "Sawn Rocks Walking Track",
        track_location: "Narrabri NSW",
        track_distance: "1.6km"
    },
    {
        img: {
            url: "./images/kiama-coast-walk-werri-beach.jpg"
        },
        track_name: "Kiama Coast Walk",
        track_location: "Kiama NSW",
        track_distance: "19.8km"
    },
    {
        img: {
            url: "./images/Wedding cake rock.jpg"
        },
        track_name: "Wedding Cake Rock",
        track_location: "Royal National Park NSW",
        track_distance: "7.7km"
    },
    {
        img: {
            url: "./images/seven-mile-beach-03.jpg"
        },
        track_name: "Seven Mile Beach Walk",
        track_location: "Seven Mile Beach National Park NSW",
        track_distance: "11.1km"
    },
    {
        img: {
            url: "./images/jerrawangala-lookout-02.jpg"
        },
        track_name: "Jerrawangla Lookout",
        track_location: "Jerrawangla National Park NSW",
        track_distance: "27.7km"
    },
    {
        img: {
            url: "./images/Drawing room rocks.jpg"
        },
        track_name: "Drawing Room Rocks",
        track_location: "Barren Grounds Nature Reserve NSW",
        track_distance: "2.7km"
    },
    {
        img: {
            url: "./images/Pigron-House-Mountain.jpg"
        },
        track_name: "Pigron House Walking Track",
        track_location: "Morton National Park NSW",
        track_distance: "6.6km"
    },
    {
        img: {
            url: "./images/Nayook Canyon Bushtrack.jpg"
        },
        track_name: "Nayook Canyon Bushtrack",
        track_location: "Lithgow NSW",
        track_distance: "2.2km Circuit"
    },
    {
        img: {
            url: "./images/Mount Alexandra.jpg"
        },
        track_name: "Mount Alexandra Walking Track",
        track_location: "Mittagong NSW",
        track_distance: "9.3km"
    }

];

Track.remove({})
    .then(() => Track.collection.insertMany(trackSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
