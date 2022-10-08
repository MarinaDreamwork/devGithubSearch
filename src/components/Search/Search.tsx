import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import React from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
};

type FormFields = {
  username: HTMLInputElement
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();

    const text = e.currentTarget.username?.value;

    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }

  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          placeholder='Search GitHub username...'
          id='search'
          name='username'
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
