import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Select from "react-select";
import Companies from "../../assets/data/companies.json";
import { apiCall } from "../../utils/ApiClient";
import { toast } from "react-toastify";

interface CompanyOption {
  value: string;
  label: string;
}

interface AddCompanyModalProps {
  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
}

const AddCompanyModal: React.FC<AddCompanyModalProps> = ({ setUserInfo }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [stockUnits, setStockUnits] = useState<number>(0);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSelectChange = (selectedOption: CompanyOption | null) => {
    setSelectedCompany(selectedOption?.value || null);
  };

  const handleStockUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockUnits(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCompany) {
      toast.error("Select Some Company");
      return;
    }
    if (stockUnits <= 0) {
      toast.error("Enter Some Stock Units");
      return;
    }
    const data = {
      company: selectedCompany,
      stockUnits: stockUnits,
    };
    console.log(data);
    interface ResponseData {
      success: boolean;
      data: any;
    }
    const response = await apiCall<ResponseData>({
      url: "/api/user/addCompany",
      method: "POST",
      data: data,
    });

    if (response?.success) {
      toast.success("Company Added Successfully");
      console.log("response", response);
      setUserInfo(response?.data);
      setStockUnits(0);
      setSelectedCompany(null);
    }
    handleCloseModal();
  };

  const companies = Companies as string[];
  const options: CompanyOption[] = companies.map((company) => ({
    value: company,
    label: company,
  }));

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add Company Stocks
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Company Stocks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="companySelect">
              <Form.Label className="my-3">Select Company</Form.Label>
              <Select
                value={
                  options.find((option) => option.value === selectedCompany) ||
                  null
                }
                onChange={handleSelectChange}
                options={options}
                placeholder="Select..."
                isClearable
              />
            </Form.Group>
            <Form.Group controlId="stockUnitsInput">
              <Form.Label className="my-3">Stock Units</Form.Label>
              <Form.Control
                type="number"
                value={stockUnits}
                onChange={handleStockUnitsChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 my-3">
              Add Stocks
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

export default AddCompanyModal;
