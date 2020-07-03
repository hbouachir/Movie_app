import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Model({film,setFilm,filmList,setFilmList}) {
  const handleChange=e=>{
    setFilm({...film,[e.target.name]:e.target.value})

  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
           <Button variant="primary" onClick={handleShow}>
        +Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
  <InputGroup.Prepend >
    <InputGroup.Text>Movie's name</InputGroup.Text>
  </InputGroup.Prepend>
  
  <FormControl onChange={handleChange} name="Name" />
  
  </InputGroup>

<InputGroup className="mb-3">
  <InputGroup.Prepend >
    <InputGroup.Text>Image Url</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl onChange={handleChange} name="URL" />
  </InputGroup>

<InputGroup className="mb-3">
  <InputGroup.Prepend >
    <InputGroup.Text>Rate</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl onChange={handleChange} name="Rate" />
</InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{setFilmList(...filmList,film) ; handleClose();setFilm([])}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default Model


