const LOCAL_HOST = 'localhost';
const LOCAL_PORT = process.env.port || 3001;

export default {
  Local: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
    domain: `http://${LOCAL_HOST}:${LOCAL_PORT}`
  }
};
