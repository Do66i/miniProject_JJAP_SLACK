import axios from 'axios';

const fetcher = <Data>(url: string) =>
  axios
    .get<Data>(url, {
      withCredentials: true,
    })
    .then((res) => res.data);

export default fetcher;
