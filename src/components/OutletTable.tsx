import React from "react";
import { Container, Table, Header, Menu, Icon } from "semantic-ui-react";

const eDMRHeaders = [
  "Analyte",
  "Quant. Min",
  "Quant. Avg",
  "Quant. Max",
  "Quant. Units",
  "Conc. Min",
  "Conc. Avg",
  "Conc. Max",
  "Conc. Units",
  "Exceedences",
];

const record = {
  id: "WV101101101",
  location: "DSC001",
  samples: [
    {
      name: "Flow",
      cmin: 0,
      cmax: 0,
      cunits: "",
      qmin: 20,
      qmax: 70,
      qunits: "GPM",
    },
    {
      name: "Iron",
      qmin: 0,
      qmax: 0,
      qunits: "Lbs/day",
      cmin: 0.134,
      cmax: 0.234,
      cunits: "mg/L",
    },
    {
      name: "Manganese",
      qmin: 0,
      qmax: 0,
      qunits: "Lbs/day",
      cmin: 0.72,
      cmax: 0.93,
      cunits: "mg/L",
    },
    {
      name: "Aluminum",
      qmin: 0,
      qmax: 0,
      qunits: "Lbs/day",
      cmin: 1.24,
      cmax: 3.1,
      cunits: "mg/L",
    },
  ],
};

const OutletTable = () => (
  <div>
    <Container style={{ padding: "5em 0em" }}>
      <Header as="h3" attached="top" textAlign="left">
        {record.id}
      </Header>
      <Table attached="bottom" celled>
        <Table.Header>
          {eDMRHeaders.map((heading) => (
            <Table.HeaderCell>{heading}</Table.HeaderCell>
          ))}
        </Table.Header>

        <Table.Body>
          {record.samples.map((analyte) => (
            <Table.Row>
              <Table.Cell>{analyte.name}</Table.Cell>
              <Table.Cell>{analyte.qmin}</Table.Cell>
              <Table.Cell>{(analyte.qmin + analyte.qmax) / 2}</Table.Cell>
              <Table.Cell error>{analyte.qmax}</Table.Cell>
              <Table.Cell>{analyte.qunits}</Table.Cell>
              <Table.Cell>{analyte.cmin}</Table.Cell>
              <Table.Cell>{(analyte.cmin + analyte.cmax) / 2}</Table.Cell>
              <Table.Cell>{analyte.cmax}</Table.Cell>
              <Table.Cell>{analyte.cunits}</Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={eDMRHeaders.length}>
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">001</Menu.Item>
                <Menu.Item as="a">002</Menu.Item>
                <Menu.Item as="a">025</Menu.Item>
                <Menu.Item as="a">DSC001</Menu.Item>
                <Menu.Item as="a">DFSC01</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  </div>
);

export default OutletTable;
