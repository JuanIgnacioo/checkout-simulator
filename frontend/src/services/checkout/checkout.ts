import axios, { AxiosResponse } from "axios";
import {CheckoutResponseType} from './types';

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "true",
    "Content-Type": "application/json",
  },
});

export const getCheckoutFetching = (
    query: any,    
) : Promise<AxiosResponse<CheckoutResponseType>> =>
api.get('/getCheckoutData', query);