import React from 'react';

interface BallProps extends React.PropsWithChildren {
  number: number;
}

const Ball: React.FC<BallProps> = (props) => {
  return (
    <div className="ball">{props.number}</div>
  );
};

export default Ball;