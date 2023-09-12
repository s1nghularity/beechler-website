import DealerMap from "./DealersMap";
import { locationData } from "./DealerData";

const DealersPage = () => {
  return (
    <div itemScope itemType="https://schema.org/Store">
      <DealerMap locations={locationData} className='dealers-page' />
    </div>
  );
};

export default DealersPage;
