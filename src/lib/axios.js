// src/lib/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // 👉 백엔드 주소로 변경
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
