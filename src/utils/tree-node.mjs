/**
 * Definition for a binary tree node
 * @param {*} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
export class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}