import DealerMap from "./DealersMap";
import { locationData } from "./DealerData";

const DealersPage = () => {
  return (
    <div>
      <DealerMap locations={locationData} className='dealers-page' />
    </div>
  );
};

export default DealersPage;
