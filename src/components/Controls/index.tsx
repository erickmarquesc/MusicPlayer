import playForward from "../../assets/playForward.svg";
import playBack from "../../assets/playBack.svg";
import { ControlsContainer } from "./styles";
import play from "../../assets/play.svg";
import { TrackTime } from "./TrackTime";

interface ConstrolsProps {
  trackTime: boolean;
  variant: 'primary' | 'secundary';
};

export function Controls({ trackTime, variant }: ConstrolsProps) {
  return (
    <>
      <ControlsContainer variant={variant}>
        <div>
          <img src={playBack} />
        </div>

        <div>
          <img src={play} />
        </div>

        <div>
          <img src={playForward} />
        </div>
      </ControlsContainer>
      {trackTime
        ? <TrackTime />
        : <></>
      }
    </>
  );
};