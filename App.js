import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><img src="https://www.woolha.com/media/2018/09/using-parceljs-bundler-for-building-reactjs-application-1200x627.jpg" />
                        <h4>Hi i am a React Application with Redux built with Parcel</h4>
                        <h4>This package contains: React Bootstrap</h4>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default App;