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

const styles = {
  background: "rgb(255,255,255)",
  background: "linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(240,240,240,1) 98%)"
}

export default function BasicCard({ list, searchInput, align }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([{ title: "", text: "" }]);

  const dispatch = useDispatch();

  const handleOpen = (index) => {
    setOpen(true);
    const newList = list.filter((_, i) => i === index);
    setData(newList);
  };

  const deleteCurrent = (index) => {
    const newList = { index: index };
    dispatch(removeTodo(newList))
    // setList(newList);
  }

  return (
    <>
      <div className={`m-10 p-auto flex flex-wrap gap-5 w-120 justify-center ${align.css}`}>
        {searchInput ? list.filter((ele) => ele.title.includes(searchInput)).map((prev, index) => (
          <Card sx={{ width: align.height, height: 150, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
            <CardContent onClick={() => handleOpen(index)} sx={{ height: "105px" }}>
              <h1 className='text-xl'>{prev.title}</h1>
              <h3 className='text-wrap break-words h-14 overflow-hidden scroll-m-0'>{prev.text}</h3>
            </CardContent>
            <CardActions style={styles} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => { deleteCurrent(index) }} size="small" style={{ color: 'red' }}>delete</Button>
            </CardActions>
          </Card>
        ))
          :
          list.map((prev, index) => (
            <Card sx={{ width: align.height, height: 150, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <CardContent onClick={() => handleOpen(index)} sx={{ height: "105px" }}>
                <h1 className='text-xl'>{prev.title}</h1>
                <h3 className='text-wrap break-words h-14 overflow-hidden scroll-m-0'>{prev.text}</h3>
              </CardContent>
              <CardActions style={styles} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "" }}>
                <Button onClick={() => { deleteCurrent(index) }} size="small" style={{ color: 'red' }}>delete</Button>
              </CardActions>
            </Card>
          ))}
      </div>
      <Modal open={open} setOpen={setOpen} data={data} list={list} />
    </>
  );
}