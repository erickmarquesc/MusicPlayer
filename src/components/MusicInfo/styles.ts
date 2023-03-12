import styled, { css } from "styled-components";

interface MusicInfoProps {
  variant: 'primary' | 'secundary';
};
export const MusicInfoContainer = styled.div<MusicInfoProps>`

  ${(props) => props.variant === 'primary' ? css`
    margin-top: 28px;
  `: props.variant === 'secundary' && css`
    margin-top: 0;
  `}

  color: #E1E1E6;
    
  h1 {
    font-size: 24px;
    margin-bottom: 9.6px;
  }
  
  p {
    opacity: 0.67;
    font-size: 19px;
  }
`;