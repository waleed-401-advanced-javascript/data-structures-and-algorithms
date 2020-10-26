const Vertex = require('./graph').Vertex;
const Graph = require('./graph').Graph;
const Edge = require('./graph').Edge;


let graph = new Graph();


const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);
const two = new Vertex(2);
const three = new Vertex(3);

// graph.add(two);
// graph.add(three);
// graph.add(six);
// graph.add(seven);
// graph.add(eight);
// graph.add(ten);
// graph.addDirectedEdge(two, seven);
// graph.addDirectedEdge(three, eight);
// graph.addDirectedEdge(six, seven);
// graph.addDirectedEdge(six, eight);
// graph.addDirectedEdge(ten, two);
// graph.addDirectedEdge(ten, eight);
// graph.addDirectedEdge(eight, seven);
// graph.size();
// graph.getNodes();
describe('Graph data structure', () => {
  test('Node can be successfully added to the graph ', () => {
    graph.add(six);
    expect(graph._adjacencyList).toBeTruthy();
  });
  test('Node can be successfully added to the graph ', () => {
    graph.add(two);
    graph.add(three);
    graph.add(six);
    graph.add(seven);
    graph.add(eight);
    graph.add(ten);
    graph.addDirectedEdge(two, seven);
    graph.addDirectedEdge(three, eight);
    graph.addDirectedEdge(six, seven);
    graph.addDirectedEdge(six, eight);
    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, eight);
    graph.addDirectedEdge(eight, seven);
    expect(graph._adjacencyList).toBeTruthy();
    expect(graph.getNeighbours(six)).toBeTruthy();
    expect(graph.getNodes()).toBeTruthy();
    expect(graph.size()).toBeTruthy();
  });
 
});

  