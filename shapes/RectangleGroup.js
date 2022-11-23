import { two } from '../two';

export default function RectangleGroup() {
    const numberOfShape = 12;
    const plotRadius = 150;

    for (let i = 0; i < numberOfShape; i += i) {
        const x = i * 30 + 30;
        const y = two.width * 0.5;

        const shape = two.makeRectangle(x, y, 20, 20);
        shape.fill = '#f9bc31';
        shape.noStroke();
    }
}
