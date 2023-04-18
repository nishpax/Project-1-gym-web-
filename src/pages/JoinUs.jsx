import React, { useState } from 'react';
 import styles from './Registration.module.css';
// import styles from 'react'

function Registration() {
  const [name, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [arr, setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    let newData = [...arr, { firstName: name, surname: lastname, Emailid: email, password: password }];
    setArr(newData);
    localStorage.setItem('userData', JSON.stringify(newData));
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register Here</h2>
        <div className={styles.formGroup}>
          <label  className={styles.label}>First Name</label>
          <input type="text" id="firstName" className={styles.input} value={name} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label  className={styles.label}>Last Name</label>
          <input type="text" id="lastName" className={styles.input} value={lastname} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label  className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label  className={styles.label}>Password</label>
          <input type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.button}>Register</button>
        {/* {arr.map((data, index) => {
          return (
            <>
            <li key={index}>
              {data.firstName}
            </li>
             <li key={index}>
             {data.LastName}
           </li>
            <li key={index}>
            {data.Email}
          </li>
          <li key={index}>
            {data.password}
          </li>
          </>
          );
        })} */}
      </form>
    </div>
  );
}

export default Registration;