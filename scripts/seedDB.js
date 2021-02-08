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
        track_image: "images/Engadine-to-Audley.jpeg",
        track_name: "Engadine to Audley",
        track_location: "Engadine NSW",
        track_distance: "5.8km One Way",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/Garie.jpeg",
        track_name: "Garie Beach to Helensburgh",
        track_location: "Garie Beach NSW",
        track_distance: "11km One Way",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/WentworthFallsLoop.jpg",
        track_name: "Wentworth Falls Loop",
        track_location: "Wentworth Falls NSW",
        track_distance: "10km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/GarrawarraFarm.jpeg"
        ,
        track_name: "Garrawarra Car Park to Figure Eight Pools",
        track_location: "Royal National Park NSW",
        track_distance: "6km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/Bundeena.jpg"
        ,
        track_name: "Bundeena to Marley Beach",
        track_location: "Bundeena NSW",
        track_distance: "12.7km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/coastal-track-01.jpg"
        ,
        track_name: "The Coast Track",
        track_location: "Royal National Park NSW",
        track_distance: "27.4km One Way",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/furber-steps-scenic-railway-walk-01.jpg"
        ,
        track_name: "Furber Steps Scenic Railway",
        track_location: "Blue Mountains NSW",
        track_distance: "869m Circuit",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/ScenicWorldToKatoombaFalls.jpg"
        ,
        track_name: "Scenic World to Katoomba Falls Lookout",
        track_location: "Katoomba NSW",
        track_distance: "1.2km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/DevilsHoleTrail.jpg"
        ,
        track_name: "Devils Hole Trail",
        track_location: "Katoomba NSW",
        track_distance: "7km One Way",
        track_intensity: "Grade 6/6 - Experienced Walkers Only"
    },
    {
        track_image: "images/RuinedCastleWalk.jpg"
        ,
        track_name: "Ruined Castle Walk",
        track_location: "Katoomba NSW",
        track_distance: "7.9km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/HunterLookout.jpeg"
        ,
        track_name: "Hunter Lookout and Great North Walk Loop",
        track_location: "Hunter Region NSW",
        track_distance: "5.6km Circuit",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/CharlestownPark.jpeg"
        ,
        track_name: "Charlestown Park Trackhead to Newcastle",
        track_location: "Newcastle NSW",
        track_distance: "12.1km One Way",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/DeepPassTrail.jpg"
        ,
        track_name: "Deep Pass Trail",
        track_location: "Lithgow NSW",
        track_distance: "1.9km One Way",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/GlowWormTunnel.jpeg"
        ,
        track_name: "Glow Worm Tunnel Walk",
        track_location: "Lithgow NSW",
        track_distance: "2.9km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/NayookCanyonBushtrack.jpg"
        ,
        track_name: "Nayook Canyon Bushtrack",
        track_location: "Lithgow NSW",
        track_distance: "2.2km Circuit",
        track_intensity: "Grade 5/6 - Experienced Walkers Only "
    },
    {
        track_image: "images/MinnamurraFalls.jpg"
        ,
        track_name: "Minnamurra Falls Walk",
        track_location: "Jamberoo NSW",
        track_distance: "3.7km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/JumpRock.jpg"
        ,
        track_name: "Jump Rock Falls Walk",
        track_location: "Macquarie Pass NSW",
        track_distance: "3.5km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/SublimePoint.jpg"
        ,
        track_name: "Sublime Point Walking Track",
        track_location: "Austinmer NSW",
        track_distance: "2.4km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/WodiWodiTrack.jpg"
        ,
        track_name: "Wodi Wodi Track",
        track_location: "Stanwell Park NSW",
        track_distance: "5.8km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/grand-canyon-track.jpg"
        ,
        track_name: "Grand Canyon Track",
        track_location: "Blue Mountains NSW",
        track_distance: "5.8km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/WongaWalk.jpg"
        ,
        track_name: "Wonga Walk",
        track_location: "Dorrigo NSW",
        track_distance: "6km",
        track_intensity: "Grade 2/6 - Easy No Experience Required"
    },
    {
        track_image: "images/thirlmere-lakes-track-01.jpg"
        ,
        track_name: "Thirlmere Lakes Track",
        track_location: "Thirlmere NSW",
        track_distance: "6.3km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/MountFairy.jpg"
        ,
        track_name: "Mount Fairy Trail",
        track_location: "Kyogle NSW",
        track_distance: "3.2km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/the-governor-walk.jpg"
        ,
        track_name: "The Governor Summit Track",
        track_location: "Mount Katutar National Park NSW",
        track_distance: "1.9km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/SixtyFootFalls.jpg"
        ,
        track_name: "Sixty Foot Falls",
        track_location: "Mittagong NSW",
        track_distance: "3.5km",
        track_intensity: "Grade 2/6 - Easy No Experience Required"
    },
    {
        track_image: "images/tomaree-head-summit-walk-01.jpg"
        ,
        track_name: "Tomaree Head Summit Walk",
        track_location: "Tomaree National Park NSW",
        track_distance: "2.1km",
        track_intensity: "Grade 6/6 - Experienced Walkers Only"
    },
    {
        track_image: "images/sawn-rocks-hero.jpg"
        ,
        track_name: "Sawn Rocks Walking Track",
        track_location: "Narrabri NSW",
        track_distance: "1.6km",
        track_intensity: "Grade 2/6 - Easy No Experience Required"
    },
    {
        track_image: "images/kiama-coast-walk-werri-beach.jpg"
        ,
        track_name: "Kiama Coast Walk",
        track_location: "Kiama NSW",
        track_distance: "19.8km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/WeddingCakeRock.jpg"
        ,
        track_name: "Wedding Cake Rock",
        track_location: "Royal National Park NSW",
        track_distance: "7.7km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/seven-mile-beach-03.jpg"
        ,
        track_name: "Seven Mile Beach Walk",
        track_location: "Seven Mile Beach National Park NSW",
        track_distance: "11.1km",
        track_intensity: "Grade 2/6 - Easy"
    },
    {
        track_image: "images/jerrawangala-lookout-02.jpg"
        ,
        track_name: "Jerrawangala Lookout",
        track_location: "Jerrawangala National Park NSW",
        track_distance: "27.7km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/DrawingRoomRocks.jpg"
        ,
        track_name: "Drawing Room Rocks",
        track_location: "Barren Grounds Nature Reserve NSW",
        track_distance: "2.7km",
        track_intensity: "Grade 3/6 - Moderate"
    },
    {
        track_image: "images/Pigeon-House-Mountain.jpg"
        ,
        track_name: "Pigeon House Walking Track",
        track_location: "Morton National Park NSW",
        track_distance: "6.6km",
        track_intensity: "Grade 4/6 - Hard"
    },
    {
        track_image: "images/MountAlexandra.jpg"
        ,
        track_name: "Mount Alexandra Walking Track",
        track_location: "Mittagong NSW",
        track_distance: "9.3km",
        track_intensity: "Grade 3/6 - Moderate"
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
