import { Controls } from "../Controls";
import { MusicInfo } from "../MusicInfo";
import { PlayerContainer, PlayerSection } from "./styles";
import imgMusic from "../../assets/imgMusic.svg";
export function Player() {
  
  return (
    <PlayerContainer>
      <PlayerSection variant="playerOne">
        <div className="wrapper">
          <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />

          <MusicInfo variant="primary" />

          <Controls trackTime={true} />

        </div>
      </PlayerSection>

      <PlayerSection variant="playerTwo" className="horizontal">
        <div className="wrapper">

          <div className="info-wrapper">

            <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />
            <MusicInfo variant="secundary" />

          </div>

          <Controls trackTime={true} />

        </div>
      </PlayerSection>

      <PlayerSection variant="playerThree" className="horizontal">
        <div className="wrapper">

          <div className="info-wrapper">

            <img src={imgMusic} alt="Capa do cd Rockeseat - Single - Acorda Devinho" />
            <MusicInfo variant="secundary" />

          </div>

          <Controls trackTime={false} />

        </div>
      </PlayerSection>
    </PlayerContainer>
  );
};