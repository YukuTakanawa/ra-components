import moment from 'moment';
import ShopItemFunc from './components/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass';
import './App.css';
import Calendar from './components/calendar';

function App() {
  const items = [
    {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull:
        "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
      price: 399,
      currency: '£',
    },
    {
      brand: 'Converse',
      title: 'Chuck 70 Vintage Canvas',
      description: 'Unisex high top shoe',
      descriptionFull:
        'The best-ever gets a seasonal makeover with premium canvas in archival color.',
      price: 80,
      currency: '$',
    },
  ];

  moment.updateLocale('ru', { week: { dow: 1 } });
  const now = moment();

  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={items[0]} />
        <ShopItemClass item={items[1]} />
        <Calendar date={now} />
      </div>
    </div>
  );
}

export default App;
