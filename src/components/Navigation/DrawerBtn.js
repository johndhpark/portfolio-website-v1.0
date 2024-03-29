import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  cursor: pointer;
  font-size: 1.75em;
  margin-right: 5px;
  color: var(--btn-color-normal);
  border-radius: 4px;
  transition: 0.2s ease-in;

  :hover {
    color: var(--btn-color-hover);
  }

  @media screen and (min-width: 999px) {
    display: none;
  }
`;

const DrawerBtn = props => {
  const { clicked } = props;
  return (
    <Container onClick={clicked} onKeyPress={clicked}>
      <FontAwesomeIcon className="menu-icon" icon={faBars} />
    </Container>
  );
};

export default DrawerBtn;
