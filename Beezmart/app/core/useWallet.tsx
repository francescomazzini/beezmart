import { useState, useEffect, createContext } from 'react';
import axios from "axios";
import * as React from "react";

export function useWallet() {
    const csrfToken = 'yVzqK5pEsBfR6wLKSbnr2freojgiRrgk';
  
    async function getMoney(bearerToken) {
      const apiKey = `Token ${bearerToken}`; // Replace with your actual API key

      async function getMoney() {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://beez-sandbox.stellab.it/api/v1/wallets', // Replace with your actual endpoint
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey,
          },
        };
      return axios.request(config)
        .then(response => {
          console.log(response)
          const data = response.data;
          return data;
        })
        .catch(e => {
          throw new Error(e.message);
        });
      }
    }

  return { getMoney };
}


