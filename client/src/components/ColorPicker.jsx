import React from 'react'

import {SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap =useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
    <SketchPicker

    color={snap.color}
    disableAlpha
    presetColors={[
      "#445D48",
      "#FDE5D4",
      "#F2C6DE",
      "#DBCDF0",
      "#F7D9C4",
      "#D6CC99",
      "#001524",
      "#A8D1D1",
      "#FFBCB",
      "#FEC868",
      "#adf7b6",
      "#fb6f92"
  
    ]}
    onChange={(color) => state.color =color.hex}


    />



    </div>
  )
}

export default ColorPicker