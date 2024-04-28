import {useState} from 'react';

const HoldingViewModel = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
      );
      const resData = await response.json();

      setData(resData?.userHolding);
    } catch (error) {
      console.error(error);
    }
  }

  const onPressBottomTab = () => {
    setShowModal(true);
  };

  const onPressClose = () => {
    setShowModal(false);
  };

  return {fetchData, data, onPressBottomTab, onPressClose, showModal};
};

export default HoldingViewModel;
