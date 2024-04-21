import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import Account from './Account'
import { useState } from 'react';
import { Hidden } from '@mui/material';

export default function CustomizedInputBase({setSearchInput}) {
    const [rotate, setRotate] = useState(false);

    const handleRotate = () => {
        setRotate(!rotate)
        handleClick();
    }

    return (
        <>
            <div className='flex justify-between m-3 mb-0 pb-0 h-6'>
                <div className='min-w-12 flex text-center'><img className='w-10 h-10 -mt-1' src="src\developer\images\keep_2020q4_48dp-removebg-preview.png" alt="logo" />
                    <h1 className='mx-px pt-1.5 pl-2'>Notes</h1>
                </div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700, height: "45px", margin: "-6px" , border: "none" , boxShadow: "none", backgroundColor: "#EEEDEB"}}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Notes "
                        onChange={(event)=>{setSearchInput(event.target.value)}}
                    />
                </Paper>
                <div className='flex mt-1 mr-5'>
                    <IconButton type="button" sx={{ p: '10px' ,marginTop: "-10px" , height: 45}}>
                        <RefreshIcon style={{ color: "#5C5470" }} />
                    </IconButton>
                    <IconButton type="button" sx={{ p: '10px' ,marginTop: "-10px" , height: 45}}>
                        <ViewDayOutlinedIcon style={{ color: "#5C5470" }} />
                    </IconButton>
                    <Account />
                </div>
            </div>
            <Divider sx={{ height: 20 }} orientation="horizontal" />
        </>
    );
}