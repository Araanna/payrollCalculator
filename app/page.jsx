"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Home() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [overtimeRate, setOvertimeRate] = useState(0);
  const [overtimeTime, setOvertimeTime] = useState(0);
  const [overtimePay, setOvertimePay] = useState(0);
  const [sss, setSSS] = useState(0);
  const [pag_ibig, setPag_ibig] = useState(0);
  const [philhealth, setPhilhealth] = useState(0);
  const [deduct, setDeduct] = useState(0);
  const [total, setTotal] = useState(0);
  const [gross, setGross] = useState(0);

  const calculate = () => {
    let _basicSalary = parseFloat(basicSalary);
    let _overtimeRate = parseFloat(overtimeRate);
    let _overtimeTime = parseFloat(overtimeTime);
    let _sss = parseFloat(sss);
    let _pagibig = parseFloat(pag_ibig);
    let _philhealth = parseFloat(philhealth);

    // Calculate overtime pay
    let _overtimePay = _overtimeRate * _overtimeTime;
    setOvertimePay(_overtimePay);

    // Calculate gross pay
    let _gross = _basicSalary + _overtimePay;
    setGross(_gross);

    // Calculate total deductions
    let _deduct = _sss + _pagibig + _philhealth;
    setDeduct(_deduct);

    // Calculate net pay
    let _total = _gross - _deduct;
    setTotal(_total);
  };

  return (
    <>
      <div className="px-[10vw] py-[6vw] md:px-[5vw] md:py-[3vw]">
        <h1 className="text-center font-bold py-[2vh]">Payroll Calculator</h1>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="px-[10vw] py-[6vw] pb-5 pt-5 mb-10 md:px-[5vw] md:py-[8vw] border border-solid rounded-2xl bg-yellow-100">
                <Col className="flex justify-between">
                  <span>Basic Salary</span>
                  <input
                    type="number"
                    value={basicSalary}
                    onChange={(e) => {
                      setBasicSalary(e.target.value);
                    }}
                  />
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>OT Rate </span>
                  <input
                    type="number"
                    value={overtimeRate}
                    onChange={(e) => {
                      setOvertimeRate(e.target.value);
                    }}
                  />
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>OT Time</span>
                  <input
                    type="number"
                    value={overtimeTime}
                    onChange={(e) => {
                      setOvertimeTime(e.target.value);
                    }}
                  />
                </Col>
                <br />
                <br />
                <span className="font-black">Overtime Pay</span>
                <span>{overtimePay}</span>
                <br />
                <br />
                <h3>Less</h3>
                <br />
                <br />
                <Col className="flex justify-between">
                  <span>SSS</span>
                  <input
                    type="number"
                    value={sss}
                    onChange={(e) => {
                      setSSS(e.target.value);
                    }}
                  />
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>Pag-Ibig</span>
                  <input
                    type="number"
                    value={pag_ibig}
                    onChange={(e) => {
                      setPag_ibig(e.target.value);
                    }}
                  />
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>Philhealth</span>
                  <input
                    type="number"
                    value={philhealth}
                    onChange={(e) => {
                      setPhilhealth(e.target.value);
                    }}
                  />
                </Col>

                <br />
                <br />
                <div className="flex justify-center">
                  <Button
                    className="justify-self-center"
                    onClick={calculate}
                    variant="dark"
                  >
                    Compute
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="px-[10vw] py-[6vw] pb-5 pt-5 md:px-[3vw] md:py-[5vw] border border-solid rounded-2xl bg-slate-300-100">
                <h1> </h1>
                <Col className="flex justify-between">
                  <span>Basic Salary</span>
                  <h6>{basicSalary}</h6>
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>OT Rate </span>
                  <h6>{overtimeRate}</h6>
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>OT Time</span>
                  <h6>{overtimeTime}</h6>
                </Col>
                <br />
                <span className="font-black">Gross Pay</span>
                <span>{gross}</span>
                <br />
                <br />
                <h3>Less</h3>
                <br />
                <Col className="flex justify-between">
                  <span>SSS</span>
                  <h6>{sss}</h6>
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>Pag-Ibig</span>
                  <h6>{pag_ibig}</h6>
                </Col>
                <br />
                <Col className="flex justify-between">
                  <span>Philhealth</span>
                  <h6>{philhealth}</h6>
                </Col>
                <br />
                <br />
                <span className="font-black">Total Deduct: </span>
                <span>{deduct}</span>
                <br />
                <span className="font-black">Net Pay: </span>
                <span>{total}</span>
                <br />
                <br />
                <br />
                <div className="flex justify-center"></div>
                <Button
                  className="justify-self-center"
                  variant="dark"
                  onClick={() => alert("Total : " + total)}
                >
                  Print
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
