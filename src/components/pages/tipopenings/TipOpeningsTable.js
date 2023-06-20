import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import "../../../styles/TipOpenings.css";
import "../../../styles/InstagramCarousel.css";

function TipOpeningsTable() {
  const [values, setValues] = useState({});

  const calculateInchesAndMm = (sizeNumber, startingValueInches) => {
    const increment = 0.005;
    const inches = startingValueInches + sizeNumber * increment;
    const mm = inches * 25.4;
    return { inches, mm };
  };

  const handleMouseOver = (sizeNumber, startingValueInches) => {
    const { inches, mm } = calculateInchesAndMm(
      sizeNumber,
      startingValueInches
    );

    setValues({
      inches,
      mm,
      arbInches: inches + 0.005,
      arbMm: mm + 0.005 * 25.4,
    });
  };

  const sizeNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const saxophoneTypes = [
    { name: "Soprano", startingValueInches: 0.03 },
    { name: "Alto", startingValueInches: 0.05 },
    { name: "Tenor", startingValueInches: 0.06 },
    { name: "Baritone", startingValueInches: 0.07 },
    { name: "Bb Clarinet", startingValueInches: 0.06 },
  ];

  useEffect(() => {
    document.title = "Tip Openings";
  }, []);

  return (
    <Container className="tip-openings">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Model</th>
            <th>Inches</th>
            <th>Millimeters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beechler</td>
            <td data-label="Inches">{values.inches?.toFixed(3)}</td>
            <td data-label="Millimeters">{values.mm?.toFixed(3)}</td>
          </tr>
          <tr>
            <td>ARB</td>
            <td data-label="Inches">{values.arbInches?.toFixed(3)}</td>
            <td data-label="Millimeters">{values.arbMm?.toFixed(3)}</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <tfoot>
          {saxophoneTypes.map((saxophoneType) => (
            <tr key={saxophoneType.name}>
              <td>{saxophoneType.name}</td>
              {sizeNumbers.map((sizeNumber) => (
                <td
                  key={sizeNumber}
                  onMouseOver={() =>
                    handleMouseOver(
                      sizeNumber,
                      saxophoneType.startingValueInches
                    )
                  }
                >
                  #{sizeNumber}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>
    </Container>
  );
}

export default TipOpeningsTable;
