import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { apiCall } from "../../utils/ApiClient";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { stock, UserInfo } from "../../types";

interface DeleteCompanyModalProps {
  stock: stock;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const DeleteCompanyModal: React.FC<DeleteCompanyModalProps> = ({
  stock,
  setUserInfo,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      company: stock.name,
    };

    try {
      // const response = await axios.post("/api/user/deleteCompanyStock", data);
      interface ResponseData {
        data: UserInfo;
      }
      const response = await apiCall<ResponseData>({
        url: "/api/user/deleteCompanyStock",
        method: "POST",
        data: data,
      });
      if (response && response.data) {
        console.log(response.data);
        toast.success("Company Deleted Successfully");
        setUserInfo(response.data);
      }
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    }

    handleCloseModal();
  };

  return (
    <>
      <Button variant="danger mx-2" onClick={handleShowModal}>
        <MdDelete />
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Stock Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            Confirm {stock.name} Stocks Deletion?
            <Button variant="primary" type="submit" className="w-100 my-3">
              Delete Stocks
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCompanyModal;
