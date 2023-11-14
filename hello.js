const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [800, 800],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'teal';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
