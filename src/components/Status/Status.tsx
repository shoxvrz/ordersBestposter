import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useSelector } from 'react-redux';
import { RootState } from '../../toolkit/store';
import './Status.scss';

const Status = () => {
  const { order } = useSelector((state: RootState) => state.order);

  // Map status to the active step index
  const getActiveStep = (status: string) => {
    switch (status) {
      case 'Buyurtma olindi!':
        return 0;
      case 'Buyurtma tayyor!':
        return 1;
      case 'Buyurtma jonatildi!':
        return 2;
      default:
        return 0; // Default to the first step if status is unknown
    }
  };

  return (
    order?.id ? (
      <div className="status">
        <div className="status__header">
          <h2>Buyurtma Tafsilotlari</h2>
          <FactCheckIcon
            className="status__header--icon"
            sx={{ color: "#125488" }}
          />
        </div>
        <Stepper className="status__stepper" activeStep={getActiveStep(order.status)} alternativeLabel>
          <Step>
            <StepLabel className="status__label">
              <div className="status__label--text">
                <span>Buyurtma olindi!</span>
                <CheckIcon className="status__icon" />
              </div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel className="status__label">
              <div className="status__label--text">
                <span>Buyurtma tayyor!</span>
                <DoneAllIcon className="status__icon" />
              </div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel className="status__label">
              <div className="status__label--text">
                <span>Buyurtma jonatildi!</span>
                <LocalShippingIcon className="status__icon" />
              </div>
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    ) : (
      <p>Malumot Yo'q</p>
    )
  );
};

export default Status;
