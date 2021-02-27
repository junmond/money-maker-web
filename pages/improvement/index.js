
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Improvement() {
    return (
        <>
            <h1>Improvement!</h1>
            <TextField
                id="outlined-full-width"
                label="Comment"
                style={{ margin: 8 }}
                placeholder="Say something to Hyunjun"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </>
    );
}