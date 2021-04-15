import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ calon1, calon2, calon3 }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama kandidat</th>
            <th>Jumlah Vote</th>
          </tr>
        </thead>
        {/* <tbody>
          {kandidate.map((calon, index) => {
            return index < 3 ? (
              <tr key={index}>
                <td>{calon.id}</td>
                <td>{calon.nama}</td>
                <td>{calon.vote}</td>
              </tr>
            ) : (
              <div></div>
            );
          })}
        </tbody> */}
        <tbody>
          {calon1.name !== "" ? (
            <tr>
              <td>{calon1.id}</td>
              <td>{calon1.name}</td>
              <td>{calon1.votecount}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {calon2.name !== "" ? (
            <tr>
              <td>{calon2.id}</td>
              <td>{calon2.name}</td>
              <td>{calon2.votecount}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {calon3.name !== "" ? (
            <tr>
              <td>{calon3.id}</td>
              <td>{calon3.name}</td>
              <td>{calon3.votecount}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
