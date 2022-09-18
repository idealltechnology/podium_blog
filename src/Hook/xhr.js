import axios from 'axios';
import config from '../Config/config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';

const xhr = axios.create();
xhr.defaults.baseURL = config.server;
xhr.defaults.withCredentials = false;

export default function useXHR() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function send(props, callBack) {
    setLoading(true);
    setError('');
    xhr
      .request(props)
      .then((res) => {
        callBack(res);
        toast.success('hazard');
      })
      .catch((reason) => {
        let message = '';
        if (reason?.response?.data?.errors?.message) {
          message = reason?.response?.data?.errors?.message;
          toast.error(message);
        } else if (
          reason?.response?.data?.validation?.body?.message
        ) {
          message =
            reason?.response?.data?.validation?.body
              ?.message;
          toast.error(message);
        } else {
          toast.error('Operation failed.');
        }
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return [loading, error, send];
}
