import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../components/layout'
import Pie from '../../components/graficas/pie'
import Stacked from '../../components/graficas/stacked'
import Roadmap from '../../components/graficas/roadmap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function General() {

    const [key, setKey] = useState('home');

    const calcularCosto = function (precio) {
        const phase1Oc1 = precio;
        const phase1Oc1L = phase1Oc1.toLocaleString();
        const phase1Oc1Profit = precio * .15.toLocaleString();
        const phase1Oc1ProfitL = phase1Oc1Profit.toLocaleString();
        const phase1Oc1ProfitTotal = (phase1Oc1 + phase1Oc1Profit).toLocaleString();
        const phase1Oc1ProfitTotalL = phase1Oc1ProfitTotal.toLocaleString();

        const agencia = (precio / 2).toLocaleString();

        return (
            <>
                <td className="text-center">${phase1Oc1L}.00</td>
                <td className="text-center">${phase1Oc1ProfitL}.00</td>
                <td className="text-center">${phase1Oc1ProfitTotalL}.00</td>
                <td className="text-center">${agencia}.00</td>
            </>
        )
    }

    const calcularCosto2 = function (precio) {
        const phase1Oc1 = precio;
        const phase1Oc1L = phase1Oc1.toLocaleString();
        const phase1Oc1Profit = precio * .15.toLocaleString();
        const phase1Oc1ProfitL = phase1Oc1Profit.toLocaleString();
        const phase1Oc1ProfitTotal = (phase1Oc1 + phase1Oc1Profit).toLocaleString();
        const phase1Oc1ProfitTotalL = phase1Oc1ProfitTotal.toLocaleString();

        const agencia = (precio / 2).toLocaleString();

        return (
            <>
                <td className="text-center">${phase1Oc1L}.00</td>
                <td className="text-center">${phase1Oc1ProfitL}.00</td>
                <td className="text-center">${phase1Oc1ProfitTotalL}.00</td>
                <td className="text-center">${agencia}.00</td>
            </>
        )
    }

    const total1 = function (valor1, valor2, valor3, valor4, valor5) {
        const eltotal = valor1 + valor2 + valor3 + valor4;
        const eltotalL = eltotal.toLocaleString();
        const eltotalProfit = eltotal * .15.toLocaleString();
        const eltotalProfitL = eltotalProfit.toLocaleString();
        const eltotalProfitTotal = (eltotal + eltotalProfit).toLocaleString();
        const eltotalProfitTotalL = eltotalProfitTotal.toLocaleString();
        return (
            <>
                <td className="text-center"><b>${eltotalL}.00</b></td>
                <td className="text-center">${eltotalProfitL}.00</td>
                <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>${eltotalProfitTotalL}.00</td>
                <td style={{ background: '#FF0000', color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>$250,000.00</td>
            </>
        )
    }

    const total2 = function (valor1, valor2) {
        const eltotal = valor1 + valor2;
        const eltotalL = eltotal.toLocaleString();
        const eltotalProfit = eltotal * .15.toLocaleString();
        const eltotalProfitL = eltotalProfit.toLocaleString();
        const eltotalProfitTotal = (eltotal + eltotalProfit).toLocaleString();
        const eltotalProfitTotalL = eltotalProfitTotal.toLocaleString();
        const eltotalProfitTotalI = eltotalProfitTotal.toLocaleString();
        return (
            <>
                <td className="text-center"><b>${eltotalL}.00</b></td>
                <td className="text-center">${eltotalProfitL}.00</td>
                <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>${eltotalProfitTotalL}.00</td>
            </>
        )
    }

    const totalYear = function (valor1) {
        const eltotal = valor1 * 12;
        const eltotalL = eltotal.toLocaleString();
        return (
            eltotalL
        )
    }
    const profitSuma = function (valor1, valor2) {
        const eltotal = valor1 + valor2;
        const eltotalL = eltotal.toLocaleString();
        return (
            eltotalL
        )
    }
    const profit = function (valor1, valor2) {
        const eltotal = valor1 - valor2;
        const eltotalL = eltotal.toLocaleString();
        return (
            eltotalL
        )
    }

    return (
        <Layout>
            <Container fluid={true} className="cotizacion">

                <Row>
                    <Col className="d-flex flex-just">
                        <h2 className="mt-3 mb-3">
                            <span>
                                <span style={{ color: '#f0582a' }}>[</span> QUOTATIONS IWM <span style={{ color: '#f0582a' }}>]</span>
                            </span>
                        </h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="KIA" title="KIA">
                                <Col>
                                    <Row>
                                        <Col>
                                            <hr />
                                            <h2><b>KIA.COM</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>DD TEAM PROFIT AGENCIA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Live chat</td>
                                                        <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                                                        {calcularCosto(250000)}
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Administration module</td>
                                                        <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                                                        {calcularCosto(130000)}
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Integrations</td>
                                                        <td>Integrations with all of KIA's platforms
                  </td>
                                                        {calcularCosto(70000)}
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Dashboard</td>
                                                        <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                                                        {calcularCosto(50000)}
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>SAP/OTHER Integration</td>
                                                        <td>System Analysis Program Development. Each business function storing its own operational data in a separate database</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL:</b></td>
                                                        {total1(250000, 130000, 70000, 50000, 125000)}
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="4"></td>
                                                        <td className="text-right" colSpan="2"><b>TOTAL PROFIT DD:</b></td>
                                                        <td style={{ background: '#222', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>$325,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <hr />
                                            <h3>MAINTENANCE</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th className="text-center" style={{ background: '#F05829', color: '#fff' }}>Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#FF0000', color: '#fff' }}>DD TEAM IWN Profit MXN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Infrastructure for hosting the platform</td>
                                                        <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                                                        {calcularCosto2(18000)}
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Operation and support</td>
                                                        <td>Support and operation activities to keep the platform in optimal operations.</td>
                                                        {calcularCosto2(6500)}
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL</b></td>
                                                        {total2(18000, 6500)}
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$12,250.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL COST FOR 1 YEAR</b></td>
                                                        <td className="text-center"><b>${totalYear(24500)}.00</b></td>
                                                        <td className="text-center">${totalYear(3675)}.00</td>
                                                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>${profitSuma(294000, 44100)}.00</td>
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$147,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col>
                                            <hr />
                                            <h2><b>LIVE CHAT</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>DD TEAM PROFIT AGENCIA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Live chat</td>
                                                        <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                                                        {calcularCosto(250000)}
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Administration module</td>
                                                        <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                                                        {calcularCosto(130000)}
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Integrations</td>
                                                        <td>Integrations with all of KIA's platforms
                  </td>
                                                        {calcularCosto(70000)}
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Dashboard</td>
                                                        <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                                                        {calcularCosto(50000)}
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>SAP/OTHER Integration</td>
                                                        <td>System Analysis Program Development. Each business function storing its own operational data in a separate database</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL:</b></td>
                                                        {total1(250000, 130000, 70000, 50000, 125000)}
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="4"></td>
                                                        <td className="text-right" colSpan="2"><b>TOTAL PROFIT DD:</b></td>
                                                        <td style={{ background: '#222', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>$325,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <hr />
                                            <h3>MAINTENANCE</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th className="text-center" style={{ background: '#F05829', color: '#fff' }}>Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#FF0000', color: '#fff' }}>DD TEAM IWN Profit MXN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Infrastructure for hosting the platform</td>
                                                        <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                                                        {calcularCosto2(18000)}
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Operation and support</td>
                                                        <td>Support and operation activities to keep the platform in optimal operations.</td>
                                                        {calcularCosto2(6500)}
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL</b></td>
                                                        {total2(18000, 6500)}
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$12,250.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL COST FOR 1 YEAR</b></td>
                                                        <td className="text-center"><b>${totalYear(24500)}.00</b></td>
                                                        <td className="text-center">${totalYear(3675)}.00</td>
                                                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>${profitSuma(294000, 44100)}.00</td>
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$147,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col>
                                            <hr />
                                            <h2><b>KIA CAREERS</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>DD TEAM PROFIT AGENCIA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Core System</td>
                                                        <td>(Public Website, Apply System, Admin System).</td>
                                                        <td className="text-center">$180,000.00</td>
                                                        <td className="text-center">$27,000.00</td>
                                                        <td className="text-center">$207,000.00</td>
                                                        <td className="text-center">$80,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Dictionaries to support 3 different Languages</td>
                                                        <td>(Implemented in the 2 main systems: Spanish, English, Korean) .</td>
                                                        <td className="text-center">$35,000.00</td>
                                                        <td className="text-center">$5,250.00</td>
                                                        <td className="text-center">$40,250.00</td>
                                                        <td className="text-center">$15,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>WhatsApp notification system</td>
                                                        <td></td>
                                                        <td className="text-center">$10,000.00</td>
                                                        <td className="text-center">$1,500.00</td>
                                                        <td className="text-center">$11,500.00</td>
                                                        <td className="text-center">$10,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Human resources</td>
                                                        <td>
                                                            <ul>
                                                                <li>1 Frontend Developer</li>
                                                                <li>1 Backend Developer</li>
                                                                <li>2 Digital Managers</li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-center">$45,000.00</td>
                                                        <td className="text-center">$6,750.00</td>
                                                        <td className="text-center">$51,750.00</td>
                                                        <td className="text-center">$20,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL:</b></td>
                                                        <td className="text-center"><b>$270,000.00</b></td>
                                                        <td className="text-center">$40,500.00</td>
                                                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>$310,500.00</td>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>$125,000.00</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-right" colSpan="6"><b>TOTAL PROFIT DEVELOPING WITH DD TEAM:</b></td>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>$185,500.00</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <hr />
                                            <h3>MAINTENANCE</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>DD TEAM PROFIT AGENCIA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Monthly maintenance<br /><b>(per month)</b></td>
                                                        <td>It includes 36hrs of monthly development for  changes or adjustments attached to the delivered system.<br /><small>(cloud infrastructure and email notification services, WHATSAPP notification service, Monthly payment)</small></td>
                                                        <td className="text-center">$27,500.00</td>
                                                        <td className="text-center">$4,125.00</td>
                                                        <td className="text-center">$31,625.00</td>
                                                        <td className="text-center">$12,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL COST PER YEAR</b></td>
                                                        <td className="text-center"><b>$330,000.00</b></td>
                                                        <td className="text-center">$49,500.00</td>
                                                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>$379,500.00</td>
                                                        <td className="text-center" style={{ background: '#FF0000', color: '#fff' }}>$144,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-right" colSpan="6"><b>TOTAL PROFIT DEVELOPING WITH DD TEAM:</b></td>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>$235,000.00</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                            <h2><b>KIA PETS</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>DD TEAM PROFIT AGENCIA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>WEB Development</td>
                                                        <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                                                        {calcularCosto(150000)}
                                                        <td>$35,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Administration module</td>
                                                        <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                                                        {calcularCosto(70000)}
                                                        <td>$20,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL</b></td>
                                                        {total1(150000, 130000, 70000, 50000)}
                                                        <td className="text-center" style={{ background: '#FF0000', color: '#fff' }}>$55,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-right" colSpan="6"><b>TOTAL PROFIT DEVELOPING WITH DD TEAM:</b></td>
                                                        <th className="text-center" style={{ background: '#ff0000', color: '#fff' }}>$235,000.00</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <hr />
                                            <h3>MAINTENANCE</h3>
                                            <hr />
                                            <Table striped bordered hover size="sm" style={{
                                                fontSize: '8px'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>CONCEPT</th>
                                                        <th>DESCRIPTION</th>
                                                        <th className="text-center">Original Cost MXN</th>
                                                        <th className="text-center">IWN Profit MXN</th>
                                                        <th className="text-center" style={{ background: '#F05829', color: '#fff' }}>Cost including IWN Gain MXN</th>
                                                        <th className="text-center" style={{ background: '#FF0000', color: '#fff' }}>DD TEAM IWN Profit MXN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Infrastructure for hosting the platform</td>
                                                        <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                                                        {calcularCosto2(18000)}
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Operation and support</td>
                                                        <td>Support and operation activities to keep the platform in optimal operations.</td>
                                                        {calcularCosto2(6500)}
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL</b></td>
                                                        {total2(18000, 6500)}
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$12,250.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="text-right"><b>TOTAL COST FOR 1 YEAR</b></td>
                                                        <td className="text-center"><b>${totalYear(24500)}.00</b></td>
                                                        <td className="text-center">${totalYear(3675)}.00</td>
                                                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>${profitSuma(294000, 44100)}.00</td>
                                                        <td style={{ background: '#FF0000', color: '#fff' }}>$147,000.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Tab>
                            <Tab eventKey="HYUNDAI" title="HYUNDAI">
                                <Col>
                                    <Row>
                                        <Col>
                                            <hr />
                                            <h2><b>HYUNDAI<br/>DISTRIBUIDORES</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                        </Col>
                                        <Col>
                                            <hr />
                                            <h2><b>HYUNDAI<br/>SEMINUEVOS</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                        </Col>
                                        <Col>
                                            <hr />
                                            <h2><b>HYUNDAI<br/>CAMIONES</b></h2>
                                            <h3>COST</h3>
                                            <hr />
                                        </Col>
                                    </Row>
                                </Col>
                            </Tab>
                            <Tab eventKey="VINTE" title="VINTE">
                                asdasdasdas
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '90px' }}>

                </Row>

            </Container>
        </Layout>

    )
}

export default General;