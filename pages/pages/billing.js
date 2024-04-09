import { Row, Col, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import { BillingAddress, CurrentPlan } from 'sub-components'
//Users
const Billing = () => {
  return (
    <Container fluid className="p-5">
      

      <Row className="mt-1 px-3 ">
        <Col >
          <Row>
          <div className="border-bottom pb-4 mb-4 ">
          <h3 className="mb-0 fw-bold">Users</h3>
        </div>
            <CurrentPlan />

            
           

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Billing