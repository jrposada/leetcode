import { TreeNode } from "./tree-node.mjs";

/**
 * Converts array to a tree node
 * @param {*[]} array
 * @return {TreeNode}
 */
export function toTreeNode(array) {
  if (array.length > 3) {
    throw new Error("Not implemented");
  }

  return new TreeNode(array[0], new TreeNode(array[1]), new TreeNode(array[2]));
}
