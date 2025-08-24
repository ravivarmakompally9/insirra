import React from 'react';
import GradientButton from "./button-1.jsx";

export const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <GradientButton
        onClick={() => console.log('clicked')}
        width="300px"
        height="60px"
        disabled={false}
      >
        Button
      </GradientButton>
    </div>
  );
};
