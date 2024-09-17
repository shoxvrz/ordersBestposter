
import "./InfoCustomer.scss";
import ContactsIcon from "@mui/icons-material/Contacts";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const InfoCustomer = () => {
  return (
    <div className="customer">
      <div className="customer__header">
        <h2>Buyurtma Ma'lumotlari</h2>
        <ContactsIcon className="customer__header--icon" />
      </div>
      <div className="customer__main">
        <div className="customer__main--info">
          <p>ID:</p> <span>0020218</span>
        </div>
        <div className="customer__main--info">
          <p>Ism:</p> <span>Shoxruz</span>
        </div>
        <div className="customer__main--info">
          <p>Tel-Nomer:</p> <span>+998915060463</span>
        </div>
        <div className="customer__main--info">
          <p>Manzil:</p> <span>Jizzax Sh</span>
        </div>
        <div className="customer__main--info">
          <p>Telegram/Instagram:</p> <span>@shoxvrzz</span>
        </div>
      </div>
      <div className="customer__bottom">
        <div>
            <TelegramIcon className="socialIcon"/>
            <span>@bestposter7</span>
        </div>
        <div>
            <TelegramIcon className="socialIcon"/>
            <span>@shoxvrzz</span>
        </div>
        <div>
            <InstagramIcon className="socialIcon"/>
            <span>@bestposter7</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCustomer;
