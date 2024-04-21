import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from "./Modal";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/AddRemove'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', margin: 'auto', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({ list, searchInput }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([{title:"",text:""}]);

  const dispatch = useDispatch();

  const handleOpen = (index) => {
    setOpen(true);
    const newList = list.filter((_, i) => i === index);
    setData(newList);
  };

  const deleteCurrent = (index) => {
    const newList = {index: index};
    dispatch(removeTodo(newList))
    // setList(newList);
  }

  return (
    <>
      <div className='flex flex-wrap p-auto gap-5 w-full'>
        {searchInput ? list.filter((ele) => ele.title.includes(searchInput)).map((prev, index) => (
          <Card sx={{margin: "auto", width: 317, height: 150, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
            <CardContent onClick={()=>handleOpen(index)}>
              <h1>{prev.title}</h1>
              <h3>{prev.text}</h3>
            </CardContent>
            <CardActions>
              <Button onClick={() => { deleteCurrent(index) }} size="small" style={{ color: 'red' }}>delete</Button>
            </CardActions>
          </Card>
        ))
          :
          list.map((prev, index) => (
            <Card sx={{ width: 317, height: 150, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <CardContent onClick={()=>handleOpen(index)}>
                <h1>{prev.title}</h1>
                <h3>{prev.text}</h3>
              </CardContent>
              <CardActions>
                <Button onClick={() => { deleteCurrent(index) }} size="small" style={{ color: 'red' }}>delete</Button>
              </CardActions>
            </Card>
          ))}
      </div>
      <Modal open={open} setOpen={setOpen} data={data} list={list}/>
    </>
  );
}