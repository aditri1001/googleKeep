import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: "5px",
  width: 500,
  bgcolor: 'background.paper',
  border: '1px #000',
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
  p: 4,
  display: "flex",
  flexDirection: "column",
  outline: "0px"
};

const inputStyle = {
  width: "100%",
  marginTop: "-3px",
  backgroundColor: "#EEEDEB",
  border: "none",
  padding: "10px",
  outlineColor: "#40A2E3",
  overflow: "hidden",
  resize: "none"
}

export default function BasicModal({ open, setOpen, data, list }) {
  const [titleValue, setTitleValue] = React.useState()
  const [textValue, setTextValue] = React.useState()
  const [reload, setReload] = React.useState(true)

  const handleClose = (id__) => {
    setOpen(false);
  };

  const updateFunc = () => {
    const updatedList = list.map((val) => {
      if (val.id === data[0].id) {
        return { ...val, title: titleValue || val.title, text: textValue || val.text };
      }
      return val;
    });
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  const handleChangeTitle = (e) => {
    setTitleValue(e.target.value)
    console.log(titleValue)
  }
  const handleChangeText = (e) => {
    setTextValue(e.target.value)
    console.log(textValue)
  }


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{
            width: "100%",
            height: "2rem",
            marginTop: "-10px",
            padding: "0",
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <Button size="small" onClick={handleClose} style={{ marginRight: "-25px" }}><CloseIcon /></Button>
          </div>
          <div style={{ width: "100%" }}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Refine Your Note :
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <textarea
                  placeholder="Refine Title ..."
                  variant="soft"
                  style={{ height: "40px", ...inputStyle }}
                  onChange={handleChangeTitle}
                >{data[0].title}</textarea>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <textarea
                  placeholder="Refine Note..."
                  variant="soft"
                  style={{ height: "100px", ...inputStyle }}
                  onChange={handleChangeText}
                >{data[0].text}</textarea>
              </Box>
            </Typography>
            <div style={{
              width: "100%",
              height: "40px",
              marginTop: "20px",
              padding: "0",
              display: "flex",
              justifyContent: "center"
            }}>
              <Button variant="contained" color="success" onClick={() => { updateFunc(); handleClose(); }} style={{ width: "100px" }}>Submit</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}