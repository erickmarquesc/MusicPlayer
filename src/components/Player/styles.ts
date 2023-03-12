import styled, { css } from "styled-components";

export const PlayerContainer = styled.div`

  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-areas: 
  'A B'
  'A C';

  gap: 32px;

  place-content: center;
  height: 100vh;
  
  .player {
    background-color: #2A2141;
    padding: 28px;
    border-radius: 10px;
  }
  
  .player img {
    width: 84px;
    height: 84px;
    object-fit: cover;
  
    border-radius: 6px;
  }
  
  .info-wrapper {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  
  .track {
    margin-top: 28px;
    position: relative;
  }
  
  .track::before{
    content: '';
    height: 6px;
    width: 100%;
    display: block;
    background: #D9D9D9;
    opacity: 0.3;
    border-radius: 10px;
  
    position: absolute;
  }
  
  .track::after {
    content: '';
    height: 6px;
    width: 80%;
    display: block;
    background: #D9D9D9;
    border-radius: 10px;
  }
  
  .time {
    font-size: 14px;
    color: #C4C4CC;
    opacity: 0.7;
  
    display: flex;
    justify-content: space-between;
  
    margin-top: 9.6px;
  }
  
  @media (max-width: 670px) {
    
    #app {
      display: flex;
      flex-direction: column;
  
      max-width: 270px;
      margin: auto;
  
      height: auto;
  
      padding-block: 60px;
    }
  
    .horizontal .controls {
      padding-inline: 30px;
    }
  
  }
`;

interface PlayerSectionProps {
  variant: 'playerOne' | 'playerTwo' | 'playerThree' | 'default';
};
export const PlayerSection = styled.div<PlayerSectionProps>`
  background-color: #2A2141;
  padding: 28px;
  border-radius: 10px;

  img {
    width: 84px;
    height: 84px;
    object-fit: cover;

    border-radius: 6px;
  }

   ${(props) => props.variant === 'playerOne' ? css`
    grid-area: A;
    padding: 50px 38px;
    .wrapper {
      width: 190px;
    }

    img {
      width: 190px;
      height: 190px;
      object-fit: cover;
    
      border-radius: 6px;
    }
  `: props.variant === 'playerTwo' && css`
      grid-area: B;
      height: fit-content;
  `}

  ${(props) => props.variant === 'playerThree' ? css`
    grid-area: C;
  `: props.variant === 'default' && css`
      grid-area: B;
      height: fit-content;
  `}
`;

interface WrapperContainerProps {
  varient: 'primary' | 'secundary' ;
};
 
export const WrapperContainer = styled.div<WrapperContainerProps>`
  ${(props) => props.varient === 'primary' ? css`
    width: 190px;
`: props.varient === 'secundary' && css``}
`;

export const WrapperSection = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;