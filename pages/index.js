import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import API from "../lib/api";
import { useEffect, useState } from 'react';

export default function Home() {

  const [datas, setDatas] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    // getAllWhitelisted()
  }, [])

  // const getAllWhitelisted = async () => {
  //   await API.get('/getWhitelisteds')
  //   .then(function (response) {
  //     setDatas(response.data.data);
  //     setLoaded(true);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }

  const addWhitelist = async () => {
    await API.post("/addWhitelist", {
      address: input
    })
    .then((response) => {
      console.log(response.data.msg);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // const deleteWhitelist = async (e) => {
  //   await API.post("/deleteWhitelist", {
  //     id: e.target.value
  //   })
  //   .then((response) => {
  //     console.log(response.data.msg);
  //     getAllWhitelisted();
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  return (
    <div className={styles.container}>
      {loaded && datas.map(e => (
        <p key={e.id}>{e.id} - {e.address} <button value={e.id} onClick={deleteWhitelist}>X</button></p>
      ))}

      <input type="text" onChange={e => setInput(e.target.value)} />
      <button onClick={addWhitelist}>Ajouter</button>
        
    </div>
  )
}
