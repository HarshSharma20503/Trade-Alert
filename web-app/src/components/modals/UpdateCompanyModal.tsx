import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineEdit } from "react-icons/md";
import { stock, UserInfo } from "../../types"; // Adjust the path as necessary

interface UpdateStockModalProps {
  stock: stock;
  //   userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const UpdateStockModal: React.FC<UpdateStockModalProps> = ({
  stock,
  setUserInfo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [stockUnits, setStockUnits] = useState<number>(
    stock.quantity as number
  );

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleStockUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockUnits(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (stockUnits <= 0) {
      toast.error("Enter Some Stock Units or Delete the stock");
      return;
    }
    const data = {
      company: stock.name,
      stockUnits: stockUnits,
    };

    try {
      const response = await axios.post("/api/user/updateCompanyStock", data);
      toast.success("Company Updated Successfully");

      setUserInfo(response.data.data);
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
      <Button variant="primary mx-2" onClick={handleShowModal}>
        <MdOutlineEdit />
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Company Stocks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="companySelect">
              <Form.Label className="my-3 fw-bold">Company Name</Form.Label>
              <div>{stock.name}</div>
            </Form.Group>
            <Form.Group controlId="stockUnitsInput">
              <Form.Label className="my-3 fw-bold">Stock Units</Form.Label>
              <Form.Control
                type="number"
                value={stockUnits}
                onChange={handleStockUnitsChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 my-3">
              Update Stocks
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

export default UpdateStockModal;
