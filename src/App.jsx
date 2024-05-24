import Card from "./components/Card";
import "./App.css";

// Component: App
const App = () => {

  const cardData = [
    {
      price: "0",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      price: "9",
      features: [
        "5 Users",
        "100GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      price: "49",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomains",
        "Monthly Status Reports"
      ]
    }
  ]

  return (
    <div className="container">
      {
        cardData.map((data, index) => (
          <Card
            key={index}
            data={data}
          />
        ))
      }
    </div>
  )
}

export default App;