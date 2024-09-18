// InfoCustomer.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../toolkit/store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ContactsIcon from '@mui/icons-material/Contacts';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import './InfoCustomer.scss';

const InfoCustomer: React.FC = () => {
  const { order, loading, error } = useSelector((state: RootState) => state.order);

  return (
    <div className="customer">
      {loading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {error && <p>{error}</p>}
      {order && (
        <>
          <div className="customer__header">
            <h2>Buyurtma Ma'lumotlari</h2>
            <ContactsIcon className="customer__header--icon" />
          </div>
          <div className="customer__main">
            <div className="customer__main--info">
              <p>ID:</p> <span>000{order.id}</span>
            </div>
            <div className="customer__main--info">
              <p>Ism:</p> <span>{order.name}</span>
            </div>
            <div className="customer__main--info">
              <p>Tel-Nomer:</p> <span>+998{order.telNomer}</span>
            </div>
            <div className="customer__main--info">
              <p>Manzil:</p> <span>{order.manzil}</span>
            </div>
            <div className="customer__main--info">
              <p>Buyurtma Sanasi:</p> <span>{order.sana}</span>
            </div>
            <div className="customer__main--info">
              <p>Telegram/Instagram:</p> <span>{order.telegInsta}</span>
            </div>
          </div>
          <div className="customer__bottom">
            <div>
              <TelegramIcon className="socialIcon" />
              <span>@bestposter7</span>
            </div>
            <div>
              <TelegramIcon className="socialIcon" />
              <span>@shoxvrzz</span>
            </div>
            <div>
              <InstagramIcon className="socialIcon" />
              <span>@bestposter7</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCustomer;
