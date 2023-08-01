import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import "../../../styles/TipOpenings.css";
import "../../../styles/InstagramCarousel.css";

function TipOpeningsTable() {
  const [selected, setSelected] = useState({});

  const data = {
    'BEECHLER': {
      'Bb Clarinet': [0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075],
      'Soprano Sax': [0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08],
      'Alto Sax': [0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1],
      'Tenor Sax': [0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11],
      'Baritone Sax': [0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12],
    },
    'ARB': {
      'Bb Clarinet': [0.039, 0.042, 0.046, 0.05, 0.055, 0.058, 0.062, 0.066, 0.072],
      'Soprano Sax': [0.042, 0.046, 0.05, 0.055, 0.058, 0.062, 0.066, 0.072, 0.08],
      'Alto Sax': [0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.15],
      'Tenor Sax': [0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115],
      'Baritone Sax': [0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12],
    },
  };

  const handleMouseOver = (instrument, sizeNumber) => {
    const inchesBeechler = data['BEECHLER'][instrument][sizeNumber - 2];
    const mmBeechler = inchesBeechler * 25.4;

    const inchesARB = data['ARB'][instrument][sizeNumber - 2];
    const mmARB = inchesARB * 25.4;

    setSelected({
      'BEECHLER': { inches: inchesBeechler, mm: mmBeechler },
      'ARB': { inches: inchesARB, mm: mmARB },
    });
  };

  const sizeNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const instruments = ['Bb Clarinet', 'Soprano Sax', 'Alto Sax', 'Tenor Sax', 'Baritone Sax'];

  return (
    <Container className="tip-openings">
      <Table striped bordered hover className="tip-openings-small first-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Inches</th>
            <th>Millimeters</th>
          </tr>
        </thead>
<tbody>
  {['BEECHLER', 'ARB'].map((model, index) => (
    <tr 
      key={model}
      style={{ backgroundColor: index % 2 === 0 ? 'white' : 'grey' }}
    >
      <td>{model}</td>
      <td>{selected[model]?.inches?.toFixed(3) || ''}</td>
      <td>{selected[model]?.mm?.toFixed(3) || ''}</td>
    </tr>
  ))}
</tbody>

      </Table>
      <Table striped  hover className='big-table'>
        <thead>
          <tr>
            <th>Instrument</th>
            {sizeNumbers.map(sizeNumber => (
              <th key={sizeNumber}>#{sizeNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {instruments.map(instrument => (
            <tr key={instrument}>
              <td>{instrument}</td>
              {sizeNumbers.map(sizeNumber => (
                <td
                  key={sizeNumber}
                  onMouseOver={() => handleMouseOver(instrument, sizeNumber)}
                >
                  #{sizeNumber}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TipOpeningsTable;
