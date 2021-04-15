import React from "react";
import { Card, CardDeck, Form } from "react-bootstrap";
import foto from "../img/zakie.png";

const Voting = ({ calon1, calon2, calon3, voting, handleRadio, pilih }) => {
  const handleVote = (e) => {
    e.preventDefault();
    if (pilih.id !== 0) voting(Number(pilih));
    else window.alert("there is error in submission");
  };

  return (
    <div>
      <Form onSubmit={handleVote}>
        <CardDeck>
          {/* {kandidate.map((calon, index) => {
            return index < 3 ? ( */}
          {calon1.name !== "" ? (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>{calon1.id}</Card.Title>
                  <Card.Img variant="top" src={foto} />
                  <Card.Text className="text-center">
                    kandidat nomor {calon1.id}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="ml-2">
                    <div className="form-check"></div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={calon1.id}
                      onChange={(event) => handleRadio(event)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {calon1.name}
                    </label>
                  </div>
                </Card.Footer>
              </Card>
            </>
          ) : (
            <div></div>
          )}
          {calon2.name !== "" ? (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>{calon2.id}</Card.Title>
                  <Card.Img variant="top" src={foto} />
                  <Card.Text className="text-center">
                    kandidat nomor {calon2.id}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="ml-2">
                    <div className="form-check"></div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={calon2.id}
                      onChange={(event) => handleRadio(event)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {calon2.name}
                    </label>
                  </div>
                </Card.Footer>
              </Card>
            </>
          ) : (
            <div></div>
          )}
          {calon3.name !== "" ? (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>{calon3.id}</Card.Title>
                  <Card.Img variant="top" src={foto} />
                  <Card.Text className="text-center">
                    kandidat nomor {calon3.id}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="ml-2">
                    <div className="form-check"></div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={calon3.id}
                      onChange={(event) => handleRadio(event)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {calon3.name}
                    </label>
                  </div>
                </Card.Footer>
              </Card>
            </>
          ) : (
            <div></div>
          )}

          {/* ) : (
              <div></div>
            );
          })} */}
        </CardDeck>
        {calon3.name !== "" ? (
          <button type="submit" className="btn btn-primary btn-lg mt-3 w-100">
            Vote
          </button>
        ) : (
          <div></div>
        )}

        <div></div>
      </Form>
    </div>
  );
};

export default Voting;
