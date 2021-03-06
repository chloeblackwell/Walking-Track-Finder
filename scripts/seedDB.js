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
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs 30 mins",
        long: "151.01472",
        lat: "34.06789"
    },
    {
        track_image: "images/Garie.jpeg",
        track_name: "Garie Beach to Helensburgh",
        track_location: "Garie Beach NSW",
        track_distance: "11km One Way",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "4hrs 30 mins",
        long: "151.06645",
        lat: "34.17020"
    },
    {
        track_image: "images/WentworthFallsLoop.jpg",
        track_name: "Wentworth Falls Loop",
        track_location: "Wentworth Falls NSW",
        track_distance: "10km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "6hrs",
        long: "150.37644",
        lat: "33.70973"
    },
    {
        track_image: "images/GarrawarraFarm.jpeg"
        ,
        track_name: "Garrawarra Car Park to Figure Eight Pools",
        track_location: "Royal National Park NSW",
        track_distance: "6km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs 30 mins",
        long: "151.03931",
        lat: "34.18006"
    },
    {
        track_image: "images/Bundeena.jpg"
        ,
        track_name: "Bundeena to Marley Beach",
        track_location: "Bundeena NSW",
        track_distance: "12.7km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "4hrs 30 mins",
        long: "151.15107",
        lat: "34.08270"
    },
    {
        track_image: "images/coastal-track-01.jpg"
        ,
        track_name: "The Coast Track",
        track_location: "Royal National Park NSW",
        track_distance: "27.4km One Way",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2 days",
        long: "151.00562",
        lat: "34.21078"
    },
    {
        track_image: "images/furber-steps-scenic-railway-walk-01.jpg"
        ,
        track_name: "Furber Steps Scenic Railway",
        track_location: "Blue Mountains NSW",
        track_distance: "869m Circuit",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "1hr 15 mins",
        long: "150.30096",
        lat: "33.72858"
    },
    {
        track_image: "images/ScenicWorldToKatoombaFalls.jpg"
        ,
        track_name: "Scenic World to Katoomba Falls Lookout",
        track_location: "Katoomba NSW",
        track_distance: "1.2km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs",
        long: "150.30096",
        lat: "33.72858"
    },
    {
        track_image: "images/DevilsHoleTrail.jpg"
        ,
        track_name: "Devil's Hole Trail",
        track_location: "Katoomba NSW",
        track_distance: "7km One Way",
        track_intensity: "Grade 6/6 - Experienced Walkers Only",
        track_duration: "3hrs 30 mmins",
        long: "150.29254",
        lat: "33.71380"
    },
    {
        track_image: "images/RuinedCastleWalk.jpg"
        ,
        track_name: "Ruined Castle Walk",
        track_location: "Katoomba NSW",
        track_distance: "7.9km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "5hrs",
        long: "150.28237",
        lat: "33.73434"
    },
    {
        track_image: "images/HunterLookout.jpeg"
        ,
        track_name: "Hunter Lookout and Great North Walk Loop",
        track_location: "Hunter Region NSW",
        track_distance: "5.6km Circuit",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs 30 mins",
        long: "151.41383",
        lat: "32.96257"
    },
    {
        track_image: "images/CharlestownPark.jpeg"
        ,
        track_name: "Charlestown Park Trackhead to Newcastle",
        track_location: "Newcastle NSW",
        track_distance: "12.1km One Way",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "5hrs 30 mins",
        long: "151.69429",
        lat: "32.96783"
    },
    {
        track_image: "images/DeepPassTrail.jpg"
        ,
        track_name: "Deep Pass Trail",
        track_location: "Lithgow NSW",
        track_distance: "1.9km One Way",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "1hr",
        long: "150.3001",
        lat: "33.34020"
    },
    {
        track_image: "images/GlowWormTunnel.jpeg"
        ,
        track_name: "Glow Worm Tunnel Walk",
        track_location: "Lithgow NSW",
        track_distance: "2.9km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "1hr 45 mins",
        long: "150.22363",
        lat: "33.24794"
    },
    {
        track_image: "images/NayookCanyonBushtrack.jpg"
        ,
        track_name: "Nayook Canyon Bushtrack",
        track_location: "Lithgow NSW",
        track_distance: "2.2km Circuit",
        track_intensity: "Grade 5/6 - Experienced Walkers Only",
        track_duration: "45 mins",
        long: "150.3001",
        lat: "33.34020"
    },
    {
        track_image: "images/MinnamurraFalls.jpg"
        ,
        track_name: "Minnamurra Falls Walk",
        track_location: "Jamberoo NSW",
        track_distance: "3.7km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "1hr 45 mins",
        long: "150.43394",
        lat: "34.38047"
    },
    {
        track_image: "images/JumpRock.jpg"
        ,
        track_name: "Jump Rock Falls Walk",
        track_location: "Macquarie Pass NSW",
        track_distance: "3.5km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "1hr 30 mins",
        long: "150.40396",
        lat: "34.34195"
    },
    {
        track_image: "images/SublimePoint.jpg"
        ,
        track_name: "Sublime Point Walking Track",
        track_location: "Austinmer NSW",
        track_distance: "2.4km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "45 mins",
        long: "150.55281",
        lat: "34.17458"
    },
    {
        track_image: "images/WodiWodiTrack.jpg"
        ,
        track_name: "Wodi Wodi Track",
        track_location: "Stanwell Park NSW",
        track_distance: "5.8km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "1hr 30 mins",
        long: "150.59000",
        lat: "34.14144"
    },
    {
        track_image: "images/grand-canyon-track.jpg"
        ,
        track_name: "Grand Canyon Track",
        track_location: "Blue Mountains NSW",
        track_distance: "5.8km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "3hrs 30 mins",
        long: "150.18528",
        lat: "33.39055"
    },
    {
        track_image: "images/WongaWalk.jpg"
        ,
        track_name: "Wonga Walk",
        track_location: "Dorrigo NSW",
        track_distance: "6km",
        track_intensity: "Grade 2/6 - Easy No Experience Required",
        track_duration: "3hrs",
        long: "152.43344",
        lat: "30.22209"
    },
    {
        track_image: "images/thirlmere-lakes-track-01.jpg"
        ,
        track_name: "Thirlmere Lakes Track",
        track_location: "Thirlmere NSW",
        track_distance: "6.3km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs 30 mins",
        long: "150.32365",
        lat: "34.13404"
    },
    {
        track_image: "images/MountFairy.jpg"
        ,
        track_name: "Mount Fairy Trail",
        track_location: "Kyogle NSW",
        track_distance: "3.2km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "1hr 30 mins",
        long: "153.01059",
        lat: "28.37541"
    },
    {
        track_image: "images/the-governor-walk.jpg"
        ,
        track_name: "The Governor Summit Track",
        track_location: "Mount Katutar National Park NSW",
        track_distance: "1.9km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "1hr",
        long: "150.09046",
        lat: "30.16574"
    },
    {
        track_image: "images/SixtyFootFalls.jpg"
        ,
        track_name: "Sixty Foot Falls",
        track_location: "Mittagong NSW",
        track_distance: "3.5km",
        track_intensity: "Grade 2/6 - Easy No Experience Required",
        track_duration: "1hr",
        long: "150.27204",
        lat: "34.26168"
    },
    {
        track_image: "images/tomaree-head-summit-walk-01.jpg"
        ,
        track_name: "Tomaree Head Summit Walk",
        track_location: "Tomaree National Park NSW",
        track_distance: "2.1km",
        track_intensity: "Grade 6/6 - Experienced Walkers Only",
        track_duration: "2hrs",
        long: "152.10586",
        lat: " 32.43057"
    },
    {
        track_image: "images/sawn-rocks-hero.jpg"
        ,
        track_name: "Sawn Rocks Walking Track",
        track_location: "Narrabri NSW",
        track_distance: "1.6km",
        track_intensity: "Grade 2/6 - Easy No Experience Required",
        track_duration: "45 mins",
        long: "150.03105",
        lat: "30.08386"
    },
    {
        track_image: "images/kiama-coast-walk-werri-beach.jpg"
        ,
        track_name: "Kiama Coast Walk",
        track_location: "Kiama NSW",
        track_distance: "19.8km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "5hrs 30 mins",
        long: "150.51420",
        lat: "34.40192"
    },
    {
        track_image: "images/WeddingCakeRock.jpg"
        ,
        track_name: "Wedding Cake Rock",
        track_location: "Royal National Park NSW",
        track_distance: "7.7km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "2hrs",
        long: "151.09075",
        lat: "34.06336"
    },
    {
        track_image: "images/seven-mile-beach-03.jpg"
        ,
        track_name: "Seven Mile Beach Walk",
        track_location: "Seven Mile Beach National Park NSW",
        track_distance: "11.1km",
        track_intensity: "Grade 2/6 - Easy",
        track_duration: "3hrs 20 mins",
        long: "150.45172",
        lat: "34.48391"
    },
    {
        track_image: "images/jerrawangala-lookout-02.jpg"
        ,
        track_name: "Jerrawangala Lookout",
        track_location: "Jerrawangala National Park NSW",
        track_distance: "27.7km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "7hrs 50 mins",
        long: "150.24342",
        lat: "35.06110"
    },
    {
        track_image: "images/DrawingRoomRocks.jpg"
        ,
        track_name: "Drawing Room Rocks",
        track_location: "Barren Grounds Nature Reserve NSW",
        track_distance: "2.7km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "1hr 10 mins",
        long: "150.42028",
        lat: "34.42552"
    },
    {
        track_image: "images/Pigeon-House-Mountain.jpg"
        ,
        track_name: "Pigeon House Walking Track",
        track_location: "Morton National Park NSW",
        track_distance: "6.6km",
        track_intensity: "Grade 4/6 - Hard",
        track_duration: "2hrs 40 mins",
        long: "150.15599",
        lat: "35.20564"
    },
    {
        track_image: "images/MountAlexandra.jpg"
        ,
        track_name: "Mount Alexandra Walking Track",
        track_location: "Mittagong NSW",
        track_distance: "9.3km",
        track_intensity: "Grade 3/6 - Moderate",
        track_duration: "3hrs 15 mins",
        long: "150.26564",
        lat: "34.26422"
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
