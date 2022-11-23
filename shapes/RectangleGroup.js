import { two } from '../two';
import { fullRotation } from '../utils';

export default function RectangleGroup() {
    const numberOfShape = 40;
    const plotRadius = 150;
    const halfWidth = two.width * 0.5;
    const halfHeight = two.height * 0.5;

    const shapes = [];

    for (let i = 0; i < numberOfShape; i++) {
        const angle = fullRotation * i / numberOfShape;
        const x = plotRadius * Math.cos(angle);
        const y = plotRadius * Math.sin(angle);

        const shape = two.makeRectangle(x, y, 150, 10);
        shape.fill = '#f9bc31';
        shape.noStroke();
        shape.rotation = angle;

        shapes.push(shape);
    }

    const group = two.makeGroup(shapes);
    group.translation.set(halfWidth, halfHeight);

    let scale;
    scale = 1;

    let isScaled;
    isScaled = true;

    two.bind('update', () => {
        group.rotation += 0.00015;

        // grow
        isScaled && (scale += 0.005);
        scale >= 2 && (isScaled = false);

        // shrink
        !isScaled && (scale -= 0.005);
        scale <= 0.05 && (isScaled = true);

        shapes.forEach((shape) => {
            shape.rotation += 0.025;
            shape.scale = scale;
        });
    });
}
