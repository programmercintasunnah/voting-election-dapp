import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Formulir from "./Formulir";

import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Voting from "./Voting";

import Electionabi from "../contracts/Election.json";
import Web3 from "web3";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kandidate: [],
      nama: "",
      vote: 0,
      id: "",
      radio: "",
      currentaccount: "0x0",
      loader: true,
      electionsm: "",
      calon1: "",
      calon2: "",
      calon3: "",
    };
    this.loadWeb3();
    this.LoadBlockchainData();
  }
  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-ethereum browser detected. you should consider trying metamask!"
      );
    }
  };

  LoadBlockchainData = async () => {
    this.setState({ loader: true });
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    this.setState({ currentaccount: account });
    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );
      const Calon1 = await election.methods.candidates(1).call();
      const Calon2 = await election.methods.candidates(2).call();
      const Calon3 = await election.methods.candidates(3).call();
      console.log(Calon1);

      if (Calon1) {
        this.setState({
          calon1: Calon1,
        });
      }
      if (Calon2) {
        this.setState({
          calon2: Calon2,
        });
      }
      if (Calon3) {
        this.setState({
          calon3: Calon3,
        });
      }

      this.setState({ electionsm: election });
      this.setState({ loader: false });
    } else {
      window.alert("the smart contract is not deployed current network");
    }
  };

  // if(loader) {
  //   return (
  //     <div class="spinner-border text-primary" role="status">
  //       <span class="visually-hidden"></span>
  //     </div>
  //   );
  // }

  tambahKandidate = async (nama) => {
    if (nama !== "") {
      this.setState({
        loader: true,
      });

      await this.state.electionsm.methods
        .addCandidate(nama)
        .send({ from: this.state.currentaccount })
        .on("transactionhash", () => {
          console.log("successfuly");
        });
      this.setState({
        loader: false,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.kandidate.length >= 3) {
      alert("cuma 3 calon");
    } else {
      this.setState({
        kandidate: [
          ...this.state.kandidate,
          {
            id: this.state.kandidate.length + 1,
            nama: this.state.nama,
            vote: 0,
            radio: 0,
          },
        ],
      });
    }
    this.setState({
      id: "",
      nama: "",
      vote: 0,
      radio: 0,
    });
  };

  handleVote = (event) => {
    event.preventDefault();

    console.log(this.state.id);

    if (this.state.radio === "") {
      alert("pilih dulu");
    } else {
      // alert("nomor " + this.state.id);
      const selaindipilih = this.state.kandidate
        .filter((noncalon) => noncalon.id !== this.state.id)
        .map((filternoncalon) => {
          return filternoncalon;
        });
      this.setState({
        kandidate: [
          ...selaindipilih,
          {
            id: this.state.id,
            nama: this.state.nama,
            vote: this.state.vote + 1,

            radio: this.state.radio,
          },
        ],
      });
    }
  };

  handleRadio = (event) => {
    event.preventDefault();

    this.setState({
      radio: event.target.value,
    });
  };

  votecandidate = async (candidateid) => {
    this.setState({ loader: true });
    await this.state.electionsm.methods
      .Vote(candidateid)
      .send({ from: this.state.currentaccount })
      .on("transactionhash", () => {
        console.log("successfuly");
      });
    this.setState({ loader: false });
  };

  render() {
    return (
      <>
        <NavbarComponent account={this.state.currentaccount} />
        <div className="container mt-5">
          <Row>
            <Col lg="4">
              <Formulir
                {...this.state}
                handleChange={this.handleChange}
                tambahKandidate={this.tambahKandidate}
              />
              <br></br>
              <Tabel
                calon1={this.state.calon1}
                calon2={this.state.calon2}
                calon3={this.state.calon3}
              />
            </Col>
            <Col>
              <Voting
                calon1={this.state.calon1}
                calon2={this.state.calon2}
                calon3={this.state.calon3}
                voting={this.votecandidate}
                handleRadio={this.handleRadio}
                pilih={this.state.radio}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
