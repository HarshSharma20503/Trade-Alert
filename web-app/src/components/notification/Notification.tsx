import React from "react";
import { Container, Table } from "react-bootstrap";
import { UserInfo } from "../../types";

interface NotificationsProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const Notifications: React.FC<NotificationsProps> = ({ userInfo }) => {
  return (
    <Container>
      <Table responsive="sm" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Priority Grade</th>
            <th>News Article</th>
          </tr>
        </thead>
        <tbody>
          {userInfo?.notifications?.map((news, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{news.name}</td>
              <td>{news.priorityLevel}</td>
              <td className="d-flex">
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Notifications;
