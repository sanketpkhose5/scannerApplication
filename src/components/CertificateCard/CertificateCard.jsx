import "./CertificateCard.css";

function CertificateCard({ data }) {
  return (
    /* Outer elevated card container */
    <div className="certificate-card">

      {/* Inner bordered data table */}
      <table>
        <tbody>
          <tr>
            <td>Registration Number</td>
            <td>{data.registrationNumber}</td>
          </tr>

          <tr>
            <td>NAME</td>
            <td>{data.name}</td>
          </tr>

          <tr>
            <td>GENDER</td>
            <td>{data.gender}</td>
          </tr>

          <tr>
            <td>DOB</td>
            <td>{data.dob}</td>
          </tr>

          <tr>
            <td>Name Of Mother</td>
            <td>{data.motherName}</td>
          </tr>

          <tr>
            <td>Name Of Father</td>
            <td>{data.fatherName}</td>
          </tr>

          <tr>
            <td>Place of Birth</td>
            <td>{data.placeOfBirth}</td>
          </tr>

          <tr>
            <td>Registration Date</td>
            <td>{data.registrationDate}</td>
          </tr>

          <tr>
            <td>Registration Unit Name</td>
            <td>{data.registrationUnitName}</td>
          </tr>

          <tr>
            <td>Registration Unit Code</td>
            <td>{data.registrationUnitCode}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default CertificateCard;