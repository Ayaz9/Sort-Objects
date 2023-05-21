let nodes = [
  {
    "nodeId": "4",
    "name": "Four",
    "parentId": "2",
    "previousSiblingId": "6"
  },
  {
    "nodeId": "8",
    "name": "Eight",
    "parentId": "7",
    "previousSiblingId": null
  },
  {
    "nodeId": "2",
    "name": "Two",
    "parentId": "1",
    "previousSiblingId": null
  },
  {
    "nodeId": "6",
    "name": "Six",
    "parentId": "2",
    "previousSiblingId": null
  },
  {
    "nodeId": "3",
    "name": "Three",
    "parentId": null,
    "previousSiblingId": null
  },
  {
    "nodeId": "5",
    "name": "Five",
    "parentId": "4",
    "previousSiblingId": null
  },
  {
    "nodeId": "7",
    "name": "Seven",
    "parentId": null,
    "previousSiblingId": "1"
  },
  {
    "nodeId": "1",
    "name": "One",
    "parentId": null,
    "previousSiblingId": "3"
  }
]

function sortObjects(nodes) {
  const nodeMap = new Map();
  let rootNodes = [];

  // Step 1: Create a map of nodes using nodeId as the key
  nodes.forEach(node => {
    node.children = []; // Initialize children array
    nodeMap.set(node.nodeId, node);
  });

  // Step 2: Iterate over the nodes and build the tree
  nodes.forEach(node => {
    const parentId = node.parentId;
    const previousSiblingId = node.previousSiblingId;

    // Step 3: Add the node to its parent's children array
    if (parentId) {
      const parent = nodeMap.get(parentId);
      parent.children.push(node);
    } else {
      // Step 4: Add the node to the root nodes
      rootNodes.push(node);
    }

    // Step 5: Update the node's parent and previous sibling references
    node.parentId = parentId || null;
    node.previousSiblingId = previousSiblingId || null;
  });

  return rootNodes;
}

console.log(sortObjects(nodes));