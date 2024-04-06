import { toTreeNode } from "../utils/to-tree-node.mjs";
import { TreeNode } from "../utils/tree-node.mjs";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  return (root.left?.val ?? 0) + (root.right?.val ?? 0) === root.val;
};

const testCases = [
  { input: toTreeNode([10, 4, 6]), output: true },
  {
    input: toTreeNode([5, 3, 1]),
    output: false,
  },
];

export { testCases, checkTree as main };
