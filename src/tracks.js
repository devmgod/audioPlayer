import imgSrc from "./assets/artwork.png";
import imgSrc2 from "./assets/artwork2.png";
import imgSrc3 from "./assets/artwork3.png";
import cali from "./assets/cali-wataboi.m4a";
import fifty from "./assets/50-tobylane.m4a";
import iwonder from "./assets/iwonder-dreamheaven.m4a";

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
