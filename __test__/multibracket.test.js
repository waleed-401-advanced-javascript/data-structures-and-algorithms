'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('multi bracked validation class',()=>{
  it ('should return true in this case', () => {
    expect(multiBracketValidation('[]')).toBeTruthy();
  });
  it ('should return true in this case', () => {
    expect(multiBracketValidation('[[]]')).toBeTruthy();
  });
  it ('should return true in this case', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
  });
  it ('should return true in this case', () => {
    expect(multiBracketValidation('()')).toBeTruthy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('(')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('{')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('[')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('[{]}')).toBeFalsy();
  });
  //   it ('should return false in this case', () => {
  //     expect(multiBracketValidation(']')).toBeFalsy();
  //   });
  //   it ('should return false in this case', () => {
  //     expect(multiBracketValidation('}')).toBeFalsy();
  //   });
  //   it ('should return false in this case', () => {
  //     expect(multiBracketValidation(')')).toBeFalsy();
  //   });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('[}')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('[)')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('{]')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('([')).toBeFalsy();
  });
  it ('should return false in this case', () => {
    expect(multiBracketValidation('[(')).toBeFalsy();
  });

});