import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import SongVideos from "./SongVideos"

export default function SearchBar(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-autocomplete"
      options={SongVideos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Your favourite song…" />}
      onChange={props.onChange}
    />
  );
}