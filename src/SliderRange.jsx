import { useState, useContext  } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Context } from "./Context";
import RangeSlider from 'react-bootstrap-range-slider';


const SliderRange = () => {

    const [ value, setValue ] = useContext(Context);
  
    return (
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
          <Form.Label>Choose quantity of notes:</Form.Label>
            <RangeSlider
              value={value}
              onChange={e => setValue(e.target.value)}
              //step={0.25}
              step={1}
              min={1}
              max={10}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={value}
            onChange={e => setValue(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>
    );
  
  };
  export default SliderRange;