import './Topbar.scss'
import LanguageIcon from '@mui/icons-material/Language';

const Topbar = () => {

    
  return (
    <div className="topbar">
      <h1 className="topbar__logo">BESTPOSTER7</h1>
      <div className="topbar__language">
    <LanguageIcon/>
      <select name="" id="">
        <option value="uz">UZB</option>
        <option value="rus">RUS</option>
      </select>
      </div>
    </div>
  );
};

export default Topbar;
