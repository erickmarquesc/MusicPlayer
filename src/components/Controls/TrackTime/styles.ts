import styled from "styled-components";

export const TrackTimeContainer = styled.div`
  .track {
    margin-top: 28px;
    position: relative;
  };
  
  .track::before{
    content: '';
    height: 6px;
    width: 100%;
    opacity: 0.3;
    display: block;
    position: absolute;
    background: #D9D9D9;
    border-radius: 10px;
  };
  
  .track::after {
    content: '';
    width: 80%;
    height: 6px;
    display: block;
    background: #D9D9D9;
    border-radius: 10px;
  };
  
  .time {
    opacity: 0.7;
    display: flex;
    color: #C4C4CC;
    font-size: 14px;
    margin-top: 9.6px;
    justify-content: space-between;
  };
`;