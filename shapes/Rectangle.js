import { two } from '../two';

export default function Rectangle() {
    const x = two.width * 0.5;
    const y = two.height * 0.5;
    const shape = two.makeRectangle(x, y, 100, 100);
    shape.fill = '#f9bc31';
    shape.noStroke();
    shape.rotation = Math.PI * 0.25;

    two.bind('update', () => {
        shape.rotation += 0.015;
    });
}
