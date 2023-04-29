import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../../../styles/TipOpenings.css';

function TipOpenings() {
  const [values, setValues] = useState({});

  const calculateInchesAndMm = (sizeNumber, startingValueInches) => {
    const increment = 0.005;
    const inches = startingValueInches + sizeNumber * increment;
    const mm = inches * 25.4;
    return { inches, mm };
  };

  const handleMouseOver = (sizeNumber, startingValueInches) => {
    const { inches, mm } = calculateInchesAndMm(sizeNumber, startingValueInches);
    
    setValues({ inches, mm, arbInches: inches + 0.005, arbMm: mm + 0.005 * 25.4 });
  };

  const sizeNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const saxophoneTypes = [
    { name: "Soprano Sax", startingValueInches: 0.030 },
    { name: "Alto Sax", startingValueInches: 0.050 },
    { name: "Tenor Sax", startingValueInches: 0.060 },
    { name: "Baritone Sax", startingValueInches: 0.070 },
    { name: "C Melody Sax", startingValueInches: 0.060 },
  ];

  return (
    <Container className='tip-openings'>
      <Table striped bordered hover >
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
            <td>{values.inches?.toFixed(3)}</td>
            <td>{values.mm?.toFixed(3)}</td>
          </tr>
          <tr>
            <td>ARB</td>
            <td>{values.arbInches?.toFixed(3)}</td>
            <td>{values.arbMm?.toFixed(3)}</td>
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
                    handleMouseOver(sizeNumber, saxophoneType.startingValueInches)
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

export default TipOpenings;
