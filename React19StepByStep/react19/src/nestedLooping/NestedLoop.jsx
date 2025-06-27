import Schools from "./Schools";

const info = [
  {
    id: 1,
    schNm: "St. Petrik",
    loc: "New York",
    courses: {
      shorts: 5,
      Diploma: 7,
      Certificate: 11,
    },
  },
  {
    id: 2,
    schNm: "EMI",
    loc: "Houston",
    courses: {
      shorts: 5,
      Diploma: 7,
      Certificate: 11,
    },
  },
  {
    id: 3,
    schNm: "LadyBird",
    loc: "California",
    courses: {
      shorts: 50,
      Diploma: 47,
      Certificate: 111,
    },
  },
  {
    id: 4,
    schNm: "Preston",
    loc: "Michigun",
    courses: {
      shorts: 15,
      Diploma: 17,
      Certificate: 211,
    },
  },
  {
    id: 5,
    schNm: "Agha Khan",
    loc: "Dallas",
    courses: {
      shorts: 7,
      Diploma: 4,
      Certificate: 1,
    },
  },
];

function NestedLoop() {
  return (
    <>
      <div>NestedLoop</div>
      <div>
        <Schools info={info} />
      </div>
    </>
  );
}

export default NestedLoop;
