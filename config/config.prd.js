const LOCAL_HOST = '127.0.0.1';
const LOCAL_PORT = process.env.port || 3001;

export default {
  // node env
  Local: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
    domain: `http://${LOCAL_HOST}:${LOCAL_PORT}`
  }
};
