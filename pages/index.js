import { useState, useEffect } from 'react';
import Head from 'next/head'
import Input from './../components/Input';
import List from './../components/List';
import { getList, addItem, deleteItem } from '../data/api';
import { MAX_ITEM_COUNT } from '../constants';
import styles from '../styles/Home.module.css'


export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])
  const [hasError, setHasError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getList()
        .then((list) => {
          setList(list);
        });
    }
  }, [])

  const onSubmitNewItem = async (event) => {
    if (event.key === 'Enter') {
      if (!inputValue) return setHasError('No Input')

      if (list.length === MAX_ITEM_COUNT) return setHasError('List has max list items')

      try {
        const newList = await addItem(inputValue)

        setList(newList);
      } catch (err) {
        hasError(err)
      }
    }
  }

  const onChange = (event) => {
    setInputValue(event.currentTarget.value);
  };

  const onDeleteItem = async (item) => {
    try {
      const newList = await deleteItem(item)

      setList(newList);
    } catch (err) {
      hasError(err)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tawkify Challenge</title>
        <meta name="description" content="A front-end challenge to generate an input list." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <main className={styles.main}>
        <Input
          id="list-input"
          label="Top 3 Priorities"
          error={!!hasError}
          helperText={hasError}
          onChange={onChange}
          onKeyDown={onSubmitNewItem}
          value={inputValue}
        />
        {list && <List items={list} onClose={onDeleteItem} />}
      </main>
    </div>
  )
}
