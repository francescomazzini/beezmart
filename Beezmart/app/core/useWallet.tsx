import { useState, useEffect, createContext } from 'react';
import axios from "axios";
import * as React from "react";

export function useWallet() {
    const csrfToken = 'yVzqK5pEsBfR6wLKSbnr2freojgiRrgk';


  
    async function getMoney(bearerToken) {
      const apiKey = `Token ${bearerToken}`; // Replace with your actual API key

        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://beez-sandbox.stellab.it/api/v1/wallets', // Replace with your actual endpoint
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey,
          },
        };

      return await axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

    async function getTransactions(bearerToken) {
      const apiKey = `Token ${bearerToken}`; // Replace with your actual API key

        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://beez-sandbox.stellab.it/api/v1/wallet/transactions', // Replace with your actual endpoint
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey,
          },
        };

      return await axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

    async function getAssets(bearerToken) {
      const apiKey = `Token ${bearerToken}`; // Replace with your actual API key

        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://beez-sandbox.stellab.it/api/v1/my-assets', // Replace with your actual endpoint
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey,
          },
        };

      return await axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }


    async function getFreeMoney (bearerToken, address_receiver) {

      console.log(address_receiver)

      const apiKey = `Token ${bearerToken}`;

      let body = {
        type: "EXCHANGE",
        address_receiver: address_receiver,
        data: 10
      };
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beez-sandbox.stellab.it/api/v1/transaction', // Replace with your actual endpoint
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
          'X-CSRF-Token': csrfToken,
        },
        data: JSON.stringify(body),
      };
  
      return axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

    async function addMyAsset (bearerToken, name, amount, data) {

      const apiKey = `Token ${bearerToken}`;

      let body = {
        name : name,
        amount : amount,
        data : data
      };
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beez-sandbox.stellab.it/api/v1/asset', // Replace with your actual endpoint
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
          'X-CSRF-Token': csrfToken,
        },
        data: JSON.stringify(body),
      };
  
      return axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

    async function addMyAsset (bearerToken, name, amount, data) {

      const apiKey = `Token ${bearerToken}`;

      let body = {
        name : name,
        amount : amount,
        data : data
      };
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beez-sandbox.stellab.it/api/v1/asset', // Replace with your actual endpoint
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
          'X-CSRF-Token': csrfToken,
        },
        data: JSON.stringify(body),
      };
  
      return axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

    async function makeTransaction (bearerToken, address_receiver, data) {

      const apiKey = `Token ${bearerToken}`;

      let body = {
        type : "TRANSFER",
        address_receiver: address_receiver,
        data: data
      };
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beez-sandbox.stellab.it/api/v1/transaction', // Replace with your actual endpoint
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
          'X-CSRF-Token': csrfToken,
        },
        data: JSON.stringify(body),
      };
  
      return axios.request(config)
        .then(response => {
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
    }

  return { getMoney, getTransactions, getFreeMoney, getAssets, addMyAsset, makeTransaction };
}


