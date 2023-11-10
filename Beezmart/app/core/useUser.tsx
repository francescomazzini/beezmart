import { useState, useEffect } from 'react';
import axios from "axios";
import * as React from "react";

export function useUser() {

    const [user, setUser] = useState<any>(undefined);

    const csrfToken = 'yVzqK5pEsBfR6wLKSbnr2freojgiRrgk';

    async function log(email, password) {

        let data = {
          "email": email,
          "password": password
        };
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://beez-sandbox.stellab.it/api/v1/login',
          headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          data : JSON.stringify(data)
        };
  
        return axios.request(config)
        .then(response => {
          const data = response.data;
          setUser(data);
        })
        .catch(e => {throw new Error(e.message)})
      }

  

  return {log};

    
}

