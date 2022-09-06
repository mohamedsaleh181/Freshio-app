import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

const Copyright = () => {
  const { setModal } = ModalContext();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link className="text-color" to={'/'} onClick={()=> setModal("")}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
