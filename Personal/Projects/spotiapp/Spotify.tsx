import React from 'react';
import {useLastFM} from 'use-last-fm';
import {Text} from 'react-native';

const Spotify = () => {
  const lastFM = useLastFM(
    'filippofonseca',
    '87cbd22caf50d21cd7ee53262523f85f',
  );

  if (lastFM.status !== 'playing') {
    return <Text>&nbsp;Not listening to anything</Text>;
  }

  return (
    <>
      <Text>
        &nbsp;Listening to {lastFM.song.name} by {lastFM.song.artist}
      </Text>
    </>
  );
};

export default Spotify;
