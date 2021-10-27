
import { Form,Modal,Button } from "react-bootstrap";
import {useState} from "react"
   
        function AddMovie({add}) {
            const [show, setShow] = useState(false);
          const[title,setTitle]=useState("")
          const[description,setDescription]=useState("")
          const[posterUrl,setPosterUrl]=useState("")
          const[rate,setRate]=useState(0)
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Add movie
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder="add title" onChange={e=>setTitle(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>description</Form.Label>
    <Form.Control type="email" placeholder="add description"onChange={e=>setDescription(e.target.value)} />
    <Form.Text className="text-muted">
 
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>postUrl</Form.Label>
    <Form.Control type="email" placeholder="Url" onChange={e=>setPosterUrl(e.target.value)} />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>rating</Form.Label>
    <Form.Control type="number" placeholder="postUrl" onChange={e=>setRate(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  </Form>
  
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => {
              add({ title, description, posterUrl, rate });
              handleClose();
            }}>
                      Add movie
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
         

    

export default AddMovie ;
