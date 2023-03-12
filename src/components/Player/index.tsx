import { PlayerContainer, PlayerSection, WrapperContainer, WrapperSection } from "./styles";
import imgMusic from "../../assets/imgMusic.svg";
import { MusicInfo } from "../MusicInfo";
import { Controls } from "../Controls";

export function Player() {  
  return (
    <PlayerContainer>
      <PlayerSection variant="playerOne">
        <WrapperContainer varient="primary">

          <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />
          <MusicInfo variant="primary" />
          
          <Controls trackTime={true} variant="secundary"/>

        </WrapperContainer>
      </PlayerSection>

      <PlayerSection variant="playerTwo">
        <WrapperContainer varient="secundary" >

          <WrapperSection>
            <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />
            <MusicInfo variant="secundary" />
          </WrapperSection>

          <Controls trackTime={true} variant="primary"/>

        </WrapperContainer>
      </PlayerSection>

      <PlayerSection variant="playerThree">
        <WrapperContainer varient="secundary" >

          <WrapperSection>
            <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />
            <MusicInfo variant="secundary" />

          </WrapperSection>

          <Controls trackTime={false} variant="primary" />

        </WrapperContainer>
      </PlayerSection>
    </PlayerContainer>
  );
};