import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FormGroup,
  Button,
  Container
} from "react-bootstrap";
import { swalConfirm, swalNoti } from "../utils/sweetalert"

import fetchData from "../utils/fetchData"

import Navbar from "../components/Navbar"

export default function Service() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);

  const bookingServiceById = async () => {
    swalConfirm("คุณต้องการจองบริการกับเราใช่หรือไม่?").then(async (confirm) => {
      if (confirm?.isConfirmed) {
        let response = await fetchData.postData(`/services/${id}/booking`)
        if (response.code === 401) {
          swalNoti(response.name, response.message, "error")
        } else {
          swalNoti("จองบริการสำเร็จ", response.message, "success")
          setTimeout(() => navigate(`/`), 1000);
        }
      }
    })
  }

  const loadServiceById = async (id) => {
    let response = await fetchData.getData(`/services/${id}`)
    setService(response)
  }

  useEffect(() => {
    if (id) {
      loadServiceById(id)
    }
  }, [id])
  return (
    <Container>
      <FormGroup className="mt-5">
        <Navbar />
      </FormGroup>
      {service && <>
        <FormGroup className="mt-5">
          <h1 style={{ fontWeight: "bold" }}>{service.name}</h1>
        </FormGroup>
        <FormGroup className="mt-4">
          <h4 style={{ fontWeight: "bold" }}>฿{(service.price).toLocaleString()}</h4>
        </FormGroup>
        <FormGroup className="mt-5">
          <div style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: service.description }} />
        </FormGroup>
        <FormGroup className="mt-5">
          <Button variant="primary" size="lg" onClick={() => bookingServiceById()}>จองบริการ</Button>
        </FormGroup>
      </>}
    </Container>
  )
}
