import { two } from '../two';
import { halfRotation, easeInOutCubic, mapAndClamp } from '../utils';

export default function LoopingSquare() {
    const shapes = [];

    const halfWidth = two.width * 0.5;
    const halfHeight = two.height * 0.5;

    const loopDuration = 60 * 4;

    const numberOfShape = 40;
    const shapeIncr = 20;

    for (let i = 0; i < numberOfShape; i++) {
        const size = (numberOfShape - i) * shapeIncr;
        const shape = two.makeRectangle(halfWidth, halfHeight, size, size);
        (i % 2 === 0) ? shape.fill = '#6ECCAF' : shape.fill = '#344D67';
        shape.noStroke();

        shapes.push(shape);
    }

    two.bind('update', (frameCount) => {
        const currentFrame = frameCount % loopDuration;
        const t = currentFrame / loopDuration;
        shapes.forEach((shape, i) => {
            const aStart = 0.01 * (numberOfShape - i);
            const aEnd = 0.1 * 1;

            const u = mapAndClamp(t, aStart, 1 - aEnd, 0, 1);
            if (i % 2 === 0) {
                shape.rotation = easeInOutCubic(u) * halfRotation;
            } else {
                shape.rotation = -1 * easeInOutCubic(u) * (Math.PI * 2);
            }
        });
    });
}
