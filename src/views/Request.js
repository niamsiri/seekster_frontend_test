import { useState, useEffect } from "react";
import {
  FormGroup,
  Container
} from "react-bootstrap";

import Moment from 'react-moment';
import fetchData from "../utils/fetchData"
import styles from "../styles/Request.module.scss";

import * as Icon from "react-icons/fa";

import Navbar from "../components/Navbar"

export default function Request() {

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    let response = await fetchData.getData(`/orders`)
    setOrders(response)
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return (
    <Container>
      <FormGroup className="mt-5">
        <Navbar />
      </FormGroup>
      <FormGroup className="mt-5">
        <h1 style={{ fontWeight: "bold" }}>รายการ</h1>
      </FormGroup>
      {orders.length > 0 ? <>
        {orders.map((item, index) => {
          return <div key={index} className={`${styles.cardRequest} shadow`}>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-4" style={{ fontWeight: "bold" }}>{item.service.name}</h4>
                <span className="me-4" >
                  <Icon.FaCalendar size="16" className="me-2 text-primary" />
                  <Moment format="DD MMMM YYYY" className="small" date={item?.createdAt} />
                </span>
                <span className="me-4" >
                  <Icon.FaClock size="16" className="me-2 text-primary" />
                  <Moment format="HH:ss" className="small" date={item?.createdAt} />
                </span>
              </div>
              <div>
                <span className="me-4 text-warning"style={{ fontSize: "24px" }}>ราคา</span>
                <span className="text-primary" style={{ fontSize: "24px" }}>฿ {(item?.service?.price).toLocaleString()}</span>
              </div>
            </div>
          </div>
        })}
      </> : <>
      </>}
    </Container>
  )
}
