import { useState, useEffect, createContext } from 'react';
import axios from "axios";
import * as React from "react";

export function useWallet() {
    const csrfToken = 'yVzqK5pEsBfR6wLKSbnr2freojgiRrgk';
  
    async function getMoney(bearerToken) {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://beez-sandbox.stellab.it/api/v1/login',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          'Authorization': `Bearer ${bearerToken}`, 
        },
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
  
    return { getMoney };
  }


