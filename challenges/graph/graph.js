'use strict';
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // adjacency list (3rd method) : quick search, space effecient.
    /*
        vertex with neighbours 
        0 => [2]
        2 => [3,4]
        5 => []
        */
    this._adjacencyList = new Map();
  }

  add(vertex) {
    this._adjacencyList.set(vertex, []);
  }
    
  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Vertex not found !!!');
    } else {
   
      const adjacencies = this._adjacencyList.get(startVertex);
            
      // add vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
           
    }
  }
  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex) ) {
      console.log('vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  
  

  getNodes(){
    let nodeList = [];
    for (const [vertex] of this._adjacencyList.entries()) {
      nodeList.push(vertex);
    }   
    return nodeList;
  }
  
  size(){
    let nodesNumber = 0;
    // eslint-disable-next-line no-unused-vars
    for (const [vertex] of this._adjacencyList.values()) {
      nodesNumber++;
    }   
      
    return nodesNumber;
  }
    
  bfs(node) {
    if (node == undefined || node.value == undefined) { return 'wrong input'; }
    let visited = [];
    let complete = new Set();
    visited.push(node);
    complete.add(node);
    while (visited.length > 0) {
      let current = visited.shift();
      let neighbours = this.GetNeighbours(current);
      console.log('ni', neighbours);
      for (let k of neighbours) {
        console.log('vertex ni', k.vertex);
        const niNode = k.vertex;
        if (!complete.has(k.vertex)) {
          complete.add(niNode);
          visited.push(niNode);
        }
      }
    }
    console.log('visited', complete);
    return complete;
  }

}


module.exports = {
  Vertex,
  Graph,
  Edge,
};