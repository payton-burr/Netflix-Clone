/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button } from './styles/style';

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button {...restProps} onClick={() => setShowPlayer(!showPlayer)}>
      Play
    </Button>
  );
};

export default Player;
