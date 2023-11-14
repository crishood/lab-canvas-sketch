const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  let rectWidth, rectHeight, positionX, positionY;
  let angle, rx, ry;
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    rectWidth = width * 0.6;
    rectHeight = height * 0.1;
    positionX = width * 0.5;
    positionY = height * 0.5;

    context.save();

    // center the rectangle
    context.translate(positionX, positionY);

    context.strokeStyle = 'darkgrey';
    context.strokeRect(
      rectWidth * -0.5,
      rectHeight * -0.5,
      rectWidth,
      rectHeight
    );

    // draw the rectangle again, but skewed
    context.strokeStyle = 'black';
    drawSkewedRect({ context, rectWidth, rectHeight, degrees: 30 });

    // reset the context to the original coordinates in the top left corner
    context.restore();
  };
};

const drawSkewedRect = ({ context, rectWidth, rectHeight, degrees }) => {
  const angle = math.degToRad(degrees);
  const rx = Math.cos(angle) * rectWidth;
  const ry = Math.sin(angle) * rectWidth;

  context.save();
  context.translate(rx * -0.5, (ry + rectHeight) * -0.5);

  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(rx, ry);
  context.lineTo(rx, ry + rectHeight);
  context.lineTo(0, rectHeight);
  context.closePath();
  context.stroke();
  context.restore();
};

canvasSketch(sketch, settings);
