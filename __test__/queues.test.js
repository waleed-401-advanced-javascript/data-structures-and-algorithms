const Queue = require('../challenges/stacksAndQueues/queues');

// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception

describe(' Queue Module', ()=>{
  it('creates a queue instance', ()=> {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it('add a value to the top of the queue', ()=> {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    // eslint-disable-next-line no-useless-escape
    expect(queue.storage).toStrictEqual([1, 2]);
   
  });

  it('can remove the last item from the queue', ()=> {
    let queue= new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.peek()).toEqual(3);
  });

  it('check if the queue isEmpty', ()=> {
    let queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should still check if the queue is empty and return false ', ()=> {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('should not peek an empty stack', ()=> {
    let queue = new Queue();
    expect(()=> queue.peek()).toThrow(RangeError);
    expect(()=> queue.peek()).toThrow('you can not peek and Empty Queue');
  });

  it('should not be able to remover form an empty queue',()=>{
    let queue = new Queue();
    expect(()=> queue.dequeue()).toThrow(RangeError);
    expect(()=>queue.dequeue()).toThrow('Queue is Empty!');
  });


});

