// BeräknaKostnadPerPerson.jsx
import React, { useState } from 'react';

const BeräknaKostnadPerPerson = ({ summa, vänner, dricks }) => {
  const [kostnadPerPerson, setKostnadPerPerson] = useState(0);

  // Beräknar kostnaden per person
  const beräknaKostnad = () => {
    const summaNum = Number(summa) // ser till så att vi skickar ett nummer och inte en sträng
    const dricksNum = Number(dricks) // ser till så att vi skickar ett nummer och inte en sträng

    if (vänner > 0) {
      const totalSumma = summaNum + dricksNum;
      const perPerson = totalSumma / vänner;
      setKostnadPerPerson(perPerson); // Uppdaterar kostnaden per person
    } else {
      alert("Antal vänner måste vara större än 0");
    }
  };
     
  return (
    <div>
      <button onClick={beräknaKostnad}>Beräkna Kostnad Per Person</button>
      {kostnadPerPerson > 0 && (
        <p>Kostnad per person: {kostnadPerPerson.toFixed(2)} kr</p>
      )}
    </div>
  );
};

export default BeräknaKostnadPerPerson;
