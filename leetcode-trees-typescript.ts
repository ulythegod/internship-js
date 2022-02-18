class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

let tree: TreeNode | null = null;
let arr1: Array<number | null> = [1, 2, 3];
tree = createTree(arr1, tree, 0);
inOrder(tree);
//let depth: number = maxDepth(tree);
//console.log(depth);
//console.log(isValidBST(tree));
console.log(isSymmetric(tree));

function createTree(values: Array<number | null>, tree: TreeNode | null, i: number): TreeNode | null {//Array<number | null> - generic тип
    if (values.length > 0) {
        if (i < values.length) {
            let temp: TreeNode | null = null;
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

function inOrder(root: TreeNode | null): void {
    if (root != null) {
        inOrder(root.left);
        document.write(root.val + " ");
        inOrder(root.right);
    }
}

function maxDepth(root: TreeNode | null): number {
    let result: number = 0;
    
    if (root) {
        result = 1;    
        let lDepth: number = maxDepth(root.left);
        let rDepth: number = maxDepth(root.right);
        
        if (lDepth > rDepth) {
            return(lDepth + 1);
        } else {
            return(rDepth + 1);
        }
    }

    return result;
};

function validate(root: TreeNode | null, low: number | null, high: number | null): boolean {
    if (root === null) {
        return true;
    }
    
    if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
        return false;
    }
    
    return validate(root.right, root.val, high) && validate(root.left, low, root.val);
}

function isValidBST(root: TreeNode | null): boolean {
    return validate(root, null, null);
};

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
    let result: boolean = false;

    if (node1 === null && node2 === null) {
        result = true;
        return result;
    }   

    if (node1 !== null && node2 !== null && node1.val === node2.val) {
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    } 

    return result;
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root) {
        if (root.left === null && root.right === null) {
            return true;
        } else {
            return isMirror(root.left, root.right);
        }
    } else {
        return true;
    }    
};
