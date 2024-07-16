import { color } from 'framer-motion';
import {proxy} from'valtio';

const state=proxy({
    intro:true,
    color:'#000000',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./logo.png.jpg',
    fullDecal:'./logo.png.jpg',

});
export default state;