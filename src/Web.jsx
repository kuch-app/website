import React, { useState, useEffect } from 'react';
import { TOTP } from 'totp-generator';
import Cookies from 'js-cookie';
import Navbar from "./navbar";
import "../../public/styles.css";
import "../../public/web.css";

const Web = () => {
    const navigateToMain = () => {
        window.location.href = '/';
    };

    const [secretKey, setSecretKey] = useState('');
    const [codeName, setCodeName] = useState('');
    const [codes, setCodes] = useState([]);

    const generateOtp = (key) => {
        const { otp } = TOTP.generate(key);
        return otp;
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCodes(prevCodes => {
            // Generate new OTPs for all codes
            return prevCodes.map(code => ({
                ...code,
                otp: generateOtp(code.secretKey)
                }));
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const saveSecretKeyToCookies = () => {
        if (!secretKey || !codeName) return; // Don't save if inputs are empty
        const newCode = { name: codeName, secretKey, otp: generateOtp(secretKey) };
        const updatedCodes = [...codes, newCode];
        Cookies.set('codes', JSON.stringify(updatedCodes), { expires: 7 });
        setCodes(updatedCodes);
        setSecretKey(''); // Reset the secret key input
        setCodeName(''); // Reset the code name input
    };

    const deleteCode = (nameToDelete) => {
        const updatedCodes = codes.filter(code => code.name !== nameToDelete);
        Cookies.set('codes', JSON.stringify(updatedCodes), { expires: 7 });
        setCodes(updatedCodes); // Update state to reflect the deleted code
    };

    useEffect(() => {
        const savedCodes = Cookies.get('codes');
        if (savedCodes) {
            setCodes(JSON.parse(savedCodes));
        }
    }, []); 


    return (
        <div>
            <Navbar/>
            <div className="App container mt-5">
     
      <div className='input-section'>
        <div>
          <input
            type="text"
            className="form-control"
            id="codeName"
            value={codeName}
            onChange={(e) => setCodeName(e.target.value)} // Handle name input change
            placeholder="fiók neve"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control"
            id="secretKey"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)} // Handle secret key input change
            placeholder="titkos kulcs"
          />
        </div>
        <button className="main-button" onClick={saveSecretKeyToCookies}>Fiók Hozzáadása</button>
      </div>

      <div className='codes-section'>
        <h2>Az ön kódjai :</h2>
        {codes.length > 0 ? (
          <ul>
            {codes.map((code, index) => (
              <li key={index}>
                <p className='code-text'>{code.name} - <strong>{code.otp}</strong></p>
                <button
                  onClick={() => deleteCode(code.name)}
                >
                  Törlés
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h3>Nincs mentett kód!</h3>
        )}
      </div>
    </div>
    </div>
    );
};

export default Web;