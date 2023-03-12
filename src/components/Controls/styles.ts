import styled, { css } from "styled-components";

interface ControlsContainerProps{
  variant: 'primary' | 'secundary';
};

export const ControlsContainer = styled.div<ControlsContainerProps>`
  display: flex;
  margin-top: 28px;
  justify-content: space-between;

  ${(props) => props.variant === 'primary' ? css`
    padding-inline: 58px;
  `: props.variant === 'secundary' && css``}

  img{
    width: 30px;
    height: 30px;


    :hover{
      cursor: pointer;
    };
  };

  @media (max-width: 670px) {
    padding-inline: 30px;
  };
`;