var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var tree = null;
var arr1 = [1, 2, 3];
tree = createTree(arr1, tree, 0);
inOrder(tree);
//let depth: number = maxDepth(tree);
//console.log(depth);
//console.log(isValidBST(tree));
//console.log(isSymmetric(tree));
function createTree(values, tree, i) {
    if (values.length > 0) {
        if (i < values.length) {
            var temp = null;
            if (values[i] !== null && typeof values[i] === "number") {
                temp = new TreeNode(Number(values[i]));
            }
            if (temp) {
                tree = temp;
                tree.left = createTree(values, tree.left, 2 * i + 1);
                tree.right = createTree(values, tree.right, 2 * i + 2);
            }
        }
    }
    return tree;
}
function inOrder(root) {
    if (root != null) {
        inOrder(root.left);
        document.write(root.val + " ");
        inOrder(root.right);
    }
}
function maxDepth(root) {
    var result = 0;
    if (root) {
        result = 1;
        var lDepth = maxDepth(root.left);
        var rDepth = maxDepth(root.right);
        if (lDepth > rDepth) {
            return (lDepth + 1);
        }
        else {
            return (rDepth + 1);
        }
    }
    return result;
}
;
function validate(root, low, high) {
    if (root === null) {
        return true;
    }
    if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
        return false;
    }
    return validate(root.right, root.val, high) && validate(root.left, low, root.val);
}
function isValidBST(root) {
    return validate(root, null, null);
}
;
function isMirror(node1, node2) {
    var result = false;
    if (node1 === null && node2 === null) {
        result = true;
        return result;
    }
    if (node1 !== null && node2 !== null && node1.val === node2.val) {
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }
    return result;
}
function isSymmetric(root) {
    if (root) {
        if (root.left === null && root.right === null) {
            return true;
        }
        else {
            return isMirror(root.left, root.right);
        }
    }
    else {
        return true;
    }
}
;
//Same Tree
function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    }
    else if (p === null || q === null) {
        return false;
    }
    else {
        return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
    }
}
;
var p = [1, 2, 1];
var q = [1, 1, 2];
var treeP = null;
treeP = createTree(p, treeP, 0);
var treeQ = null;
treeQ = createTree(q, treeQ, 0);
console.log(isSameTree(treeP, treeQ));
