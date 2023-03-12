import { MusicInfoContainer } from "./styles";

interface MusicInfoProps {
  variant: 'primary' | 'secundary';
};

export function MusicInfo({variant }: MusicInfoProps) {
  return (
    <MusicInfoContainer variant={variant}>
      <h1>Acorda Devinho</h1>
      <p>Banda Rockeseat</p>
    </MusicInfoContainer>
  );
};