import React from "react";
import { Button, Form } from "react-bootstrap";

const Formulir = ({ tambahKandidate, handleChange, nama }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nama);
    tambahKandidate(nama);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama kandidat</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama kandidat"
            value={nama}
            name="nama"
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Simpan
        </Button>
      </Form>
    </div>
  );
};

export default Formulir;
