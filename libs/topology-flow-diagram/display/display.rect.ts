import { Node } from '../../topology/models/node';
import { Rect } from '../../topology/models/rect';

export function flowDisplayIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function flowDisplayTextRect(node: Node) {
  node.iconTextRect = new Rect(
    node.rect.x + node.rect.width / 8,
    node.rect.y,
    (node.rect.width * 3) / 4,
    node.rect.height
  );
  node.fullTextRect = node.iconTextRect;
}