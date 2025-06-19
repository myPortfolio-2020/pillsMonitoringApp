import "./App.css";

const personsArray = [
  {
    nm: "Jamal",
    city: "Islamabad",
    sal: 4567,
  },
  {
    nm: "Kamal",
    city: "Karachi",
    sal: 8867,
  },
  {
    nm: "Dhamaml",
    city: "Lahore",
    sal: 2567,
  },
  {
    nm: "Tammal",
    city: "Islamabad",
    sal: 9567,
  },
  {
    nm: "Behaar",
    city: "Islamabad",
    sal: 4567,
  },
  {
    nm: "Jamal",
    city: "Lahore",
    sal: 4567,
  },
  {
    nm: "Monaal",
    city: "Karachi",
    sal: 4567,
  },
];
function App() {
  return (
    <>
      <div>Methods</div>
      <h3>Map Method</h3>
      {personsArray.map((person, index) => {
        return (
          <div key={index} className="flex">
            <div>{person.nm}</div>
            <div>{person.city}</div>
            <div>{person.sal}</div>
          </div>
        );
      })}
      <h3>Filter</h3>
    </>
  );
}

export default App;
