// TODO need to be deleted, since for test
import { testService } from '../services/test';

async function getTestData(ctx) {
  const body = await testService();
  ctx.body = body;
}

export default {
  getTestData
};
