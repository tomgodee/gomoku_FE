import baseService from '../baseApi';

const ping = () => baseService.get('/ping').then((data) => data);

export default {
  ping,
};
