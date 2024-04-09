import React from "react";
import Link from 'next/link';
import { Col, Card, Dropdown, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import ProjectsContributionsData from 'data/profile/ProjectsContributionsData';
const LayoutVertical = () => {


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="text-muted text-primary-hover">
        {children}
    </Link>)
));

CustomToggle.displayName = 'CustomToggle';

const ActionMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
                <MoreVertical size="15px" className="text-muted" />
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'}>
                <Dropdown.Item eventKey="1">
                    Action
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                    Another action
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                    Something else here
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-5 col-md-6  h-100 mt-2 bg-white border">


          <div className="d-flex justify-content-between  align-items-center">
            <div className="d-flex align-items-center">
              <div className="row">
                <h5 className="mb-0 fw-bold mt-4">Jitu Chauhan</h5>
                <p className="mb-0">19 minutes ago</p>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div class="card w-75 h-75 mx-auto mt-3 mb-4 border">
            <img src="https://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-banner-instagram-post-template_106176-2303.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <div className="mb-2 text-center mt-0">
                <span className="me-1 me-md-4">
                  <i className="fe fe-heart"></i> <span>20 Like</span>
                </span>
                <span className="me-1 me-md-4">
                  <i className="fe fe-message-square"></i> <span>12 Comment</span>
                </span>
                <span>
                  <i className="fe fe-share-2"></i>
                  <span> Share</span>
                  <h5 className="ms-1  mt-2 pt-3 text-center text-secondary fs-4  ">Post description</h5>
                  <p className=""> This post was uploaded by john yesterday it is a video that shows about...... .</p>
                </span>
                
           
              </div>
            </div>

          </div>

        </div>
        <div className="col-lg-7 col-md-6 pt-3 mt-2 bg-white border">


        <Col xl={6} lg={6} md={12} xs={12} className="w-100">
            <Card>
                <Card.Body>
                    <Card.Title as="h4">Interactions</Card.Title>
                    {ProjectsContributionsData.map((item, index) => {
                        return (
                            <div className="d-md-flex justify-content-between align-items-center mb-5 " key={index}>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                            <Image src={item.brandLogo} alt="" />
                                        </div>
                                    </div>
                                    {/* text */}
                                    <div className="ms-3 ">
                                        <h5 className="mb-1">
                                            <Link href="#" className="text-inherit">{item.projectName}</Link>
                                        </h5>
                                        <p className="mb-0 fs-5 text-muted">{item.description}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-10 ms-md-0 mt-3">
                                    {/* avatar group */}
                                    <div className="avatar-group me-2">
                                        {item.members.map((avatar, avatarIndex) => {
                                            return (
                                                <span className="avatar avatar-sm" key={avatarIndex}>
                                                    <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        {/* dropdown */}
                                        <ActionMenu/>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        </Col>
          <div className="border-rounded px-2 mt-1">
          <div className="row mt-3 px-10 mt-7 mb-auto">
        <div className="col-lg-4 col-md-4 mb-auto">
          
        <button type="button" class="btn btn-outline-secondary">Reactions</button>
             
        </div>
        <div className="col-lg-4 col-md-4">


        <button type="button" class="btn btn-outline-secondary">Comments</button>
         
          
        </div>
        <div className="col-lg-4 col-md-4">


        <button type="button" class="btn btn-outline-secondary dropdown">Report</button>


        </div>
      </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default LayoutVertical;
