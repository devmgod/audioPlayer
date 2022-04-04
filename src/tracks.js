import imgSrc from "./assets/artwork.png";
import imgSrc2 from "./assets/artwork2.png";
import imgSrc3 from "./assets/artwork3.png";
import cali from "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3";
import fifty from "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3";
import iwonder from "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
const tracks = [
  {
    title: "Cali",
    artist: "Wataboi",
    audioSrc: cali,
    image: imgSrc,
    color: "#00aeb0",
  },
  {
    title: "50",
    artist: "tobylane",
    audioSrc: fifty,
    image: imgSrc2,
    color: "#ffb77a",
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc: iwonder,
    image: imgSrc3,
    color: "#5f9fff",
  },
];

export default tracks;
