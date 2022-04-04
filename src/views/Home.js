import { useState, useEffect } from "react";
import {
  Image,
  FormGroup,
  Row,
  Col,
  Container
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import fetchData from "../utils/fetchData"
import styles from "../styles/Home.module.scss";

import Navbar from "../components/Navbar"

const CardService = (props) => {

  const navigate = useNavigate();

  return (
    <div className={`${styles.cardService} shadow-sm mb-4`} onClick={() => navigate(`/service/${props._id}`)}>
      <Image src={props?.picture} alt={props?.name} />
      <FormGroup className="d-flex justify-content-between p-2">
        <span className="mt-2">{props?.name.length > 20 ? `${props?.name.slice(0, 20)}...` : props?.name}</span>
        <div>
          <span className="me-2 small text-warning">เริ่มต้น</span>
          <span className="text-primary" style={{ fontSize: "22px" }}>฿ {(props?.price).toLocaleString()}</span>
        </div>
      </FormGroup>
    </div>
  )
}

export default function Home() {

  const [services, setServices] = useState([]);

  const loadServices = async (status, sortBy) => {
    let response = await fetchData.getData(`/services`)
    console.log(response)
    setServices(response)
  }

  useEffect(() => {
    loadServices()
  }, [])

  return (
    <Container>
      <div className={styles.cardBox}>
        <Image className={styles.imageBox} src="assets/housewife.png" />
        <div className={styles.contentBox}>
          <Row className="justify-content-center">
            <Col sm="12" md="10" lg="8">
              <Navbar />
              <FormGroup className={`text-center`}>
                <h1 className={styles.titleText}>คำบรรยายต่างๆนานา</h1>
                <p className="mb-0">เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน </p>
                <p>ทุกๆด้านอย่างที่คุณต้องการ</p>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className={`${styles.contentBody} px-5`}>
        <FormGroup className="mb-4">
          <h3 style={{ "fontWeight": "bold" }}>งานบริการ</h3>
        </FormGroup>
        <FormGroup>
          <Row>
            {services.map((item, index) => {
              return <Col md="4" lg="4" key={index}>
                <CardService {...item} />
              </Col>
            })}
          </Row>
        </FormGroup>
      </div>
    </Container>
  )
}
