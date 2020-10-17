const HashTable = require('../challenges/hashtables/hashtable');




describe('Hash tables testing ',() => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new HashTable(1024);
    table.add('key1','value1');
    expect(table.entries[table.hash('key1')].head.value).toStrictEqual({'key1':'value1'});
  });

  
  test('Retrieving based on a key returns the value stored', () => {
    let table = new HashTable(1024);
    table.add('key1','value1');
    expect(table.get('key1')).toStrictEqual('value1');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.add('key1','value1');
    expect(table.get('key3')).toBeNull();
  });
  
  test('Successfully handle a collision within the hashtable', () => {
    let table = new HashTable(1024);
    table.add('key1','value1');
    table.add('1key','value2');
    expect(table.contains('key1')).toBeTruthy();
  });
  test('Retrieving based on a key returns the value stored', () => {
    let table = new HashTable(1024);
    table.add('key1','value1');
    table.add('1key','value2');
    expect(table.get('1key')).toStrictEqual('value2');
  });
});