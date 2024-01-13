import "./App.css";
import PropTypes from "prop-types";

const data = [
  {
    subscriptionType: "FREE",
    title: "$0/month",
    features: [
      { title: "Single User", isEnabled: true },
      { title: "50GB Storage", isEnabled: true },
      { title: "Unlimited Public Projects", isEnabled: true },
      { title: "Community Access", isEnabled: true },
      { title: "Unlimited Private Projects", isEnabled: false },
      { title: "Dedicated Phone Support", isEnabled: false },
      { title: "Free Subdomain", isEnabled: false },
      { title:"Monthly Status Reports", isEnabled: false },
    ],
  },
  {
    subscriptionType: "PLUS",
    title: "$9/month",
    features: [
      { title: "5 Users", isEnabled: true },
      { title: "50GB Storage", isEnabled: true },
      { title: "Unlimited Public Projects", isEnabled: true },
      {title: "Community Access", isEnabled: true},
      {title: "Unlimited Private Projects", isEnabled: true},
      {title: "Dedicated Phone Support", isEnabled: true},
      {title: "Free Subdomain", isEnabled: true},
      {title: "Monthly Status Reports", isEnabled: false}
    ],
  },
  {
    subscriptionType: "PRO",
    title: "$49/month",
    features: [
      { title: "Unlimited Users", isEnabled: true },
      { title: "50GB Storage", isEnabled: true },
      { title: "Unlimited Public Projects", isEnabled: true },
      {title: "Community Access", isEnabled: true},
      {title: "Unlimited Private Projects", isEnabled: true},
      {title: "Dedicated Phone Support", isEnabled: true},
      {title: "Free Subdomain", isEnabled: true},
      {title: "Monthly Status Reports", isEnabled: true}
    ],
  },
];

const Pricecard = ({ subscriptionType, title, features }) => {
  return (
    <div className="cards">
      <p>{subscriptionType}</p>
      <h1>{title}</h1>
      <hr/>
      {features.map((element, index) => (
        //<i class='bx bx-check'></i>
        element.isEnabled === true ? (<p className="para" key={index}><i className='bx bx-check'></i>{element.title}</p>) : (<p className="para blur" key={index}><i className='bx bx-x blur'></i>{element.title}</p>)
      ))}
      <button className="btn">BUTTON</button>
    </div>
  );
};

Pricecard.propTypes = {
  subscriptionType: PropTypes.string,
  title: PropTypes.string,
  features: PropTypes.array,
};

const PriceCard = () => {
  return (
     <div className="container">
      {data.map((cardData) => (
        <Pricecard
          key={cardData.subscriptionType}
          subscriptionType={cardData.subscriptionType}
          title={cardData.title}
          features={cardData.features}
        />
      ))}
    </div>
  );
};
export default PriceCard;
