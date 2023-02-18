import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import pic from '../img/pic3.jpg'

function UpdateProfile() {

    // const roundedCircle = true;

    return (
        <>
            <h1 className="text-center mb-5">Edit Profile</h1>
            <Container className="w-50 mt-5">
                <Row >
                    <Col md={5} className='text-center'>
                        <img src={pic} alt="Avatar" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                        {/* <Image className="img-fluid mb-3 profile-image" src={pic} /> */}
                        <h6 className="mt-4">Mubeen Maqsod</h6>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId='firstname'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter firstname'
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='lastname'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter lastname'
                                ></Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateProfile

