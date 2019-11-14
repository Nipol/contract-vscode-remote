const Counter = artifacts.require('Counter');

contract('Counter', async () => {
  it('Contract가 초기에 배포된 이후에는 값이 0이어야 합니다.', async () => {
    let CounterInstance = await Counter.deployed();
    let value = await CounterInstance.value();
    assert.equal(value.valueOf(), 0);
  });

  it('add 함수를 호출한 뒤에는 값이 1이어야 합니다.', async () => {
    let CounterInstance = await Counter.deployed();
    await CounterInstance.add();
    let value = await CounterInstance.value();
    assert.equal(value.valueOf(), 1);
  });

  it('sub 함수를 두 번 호출한 뒤에는 값이 -1이어야 합니다.', async () => {
    let CounterInstance = await Counter.deployed();
    await CounterInstance.sub();
    await CounterInstance.sub();
    let value = await CounterInstance.value();
    assert.equal(value.valueOf(), -1);
  });
});