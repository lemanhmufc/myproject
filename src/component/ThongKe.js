import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
export default function ThongKe() {
  const [numOfBooks, setIndex] = useState(0);
  const [nxb_gia, setNxb_Gia] = useState([]);
  useEffect(() => {
    setNxb_Gia([]);
  }, []);
  return (
    <div>
      <h6 style={{ marginTop: 30, marginLeft: 40 }}>{"Tổng số sách: " + numOfBooks}</h6>
      <h6 style={{ marginTop: 30 ,  marginLeft: 40}}>Tổng số tiền sách theo nhà xuất bản </h6>

      <Table style={{ marginTop: 30,  marginLeft: 40 }}>
        <thead>
          <tr>
            <th>Tên nhà xuất bản</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {nxb_gia.map((nxb_gia) => {
            return (
              <tr>
                <td>{nxb_gia.nxb}</td>
                <td>{nxb_gia.gia}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
