// TODO need to be deleted, since for test

async function getTestData(ctx) {
  ctx.body = [{
    id: '1',
    text: 'aaa',
    complete: true
  }, {
    id: '2',
    text: 'bbb',
    complete: true
  }, {
    id: '3',
    text: 'ccc',
    complete: false
  }, {
    id: '4',
    text: 'dddd',
    complete: false
  }, {
    id: '5',
    text: 'eeee',
    complete: true
  }];
}

export default {
  getTestData
};
