import axios from '../api/axiosConifig';
import CurrencyData from '../interfaces/CurrencyData'
import ResponseApi from '../interfaces/ResponseApi'

export const consultQuote = async (endpoint: string, key: string): Promise<ResponseApi | null> => {
  try {
      const response = await axios.get(`/${endpoint}`);
      const parsedData: CurrencyData = response.data;
      const specificCurrencyData = parsedData[key];
      
      if (specificCurrencyData) {
          const responseApi: ResponseApi = {
              code: specificCurrencyData.code,
              high: specificCurrencyData.high,
              low: specificCurrencyData.low,
              bid: specificCurrencyData.bid,
              create_date: specificCurrencyData.create_date,
          };
          return responseApi;
      } else {
          return null;
      }
  } catch (error) {
      console.error(error);
      return null;
  }
};

 