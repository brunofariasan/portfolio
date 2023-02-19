import React from "react";
import {
  Container,
  Label,
  Inputs,
  TextArea,
} from './styles';

const Input = (props) => {
  const { width, height, type } = props;
  let style = { outline: 'none' };
  let placeholder = {};

  if (height) {
    style.height = height;
  }
  if (width) {
    style.width = width;
  }

  return (
    <Container>
      <Label>{props.title}:</Label>
      {
        props.type === 'textarea' ? (
          <TextArea
            style={style}
            {...props}
          />
        ) : (
          <Inputs
            style={style}
            type={type || "text"}
            {...props}
          />
        )
      }
    </Container>
  );
};

export default Input;