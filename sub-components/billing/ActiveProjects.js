import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";
import { useState } from 'react';
//Users page
const ActiveProjects = () => {
const [data,setdata]=useState("Activate")
const handleFunction=()=>{
setdata('Deactivate');
}
    return (
        <Row className="mt-0">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4 ">
                        <h4 className="mb-0">Active Users</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>User name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>CreatedAt</th>
                                <th>Followers</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ActiveProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                                        <Image src={item.brandLogo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle"><span className>8880065432</span></td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                {item.members.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })}
                                                 <span> 12/2/2024</span>
                                            </div>
                                        </td>
                                        <td className="align-middle text-dark ">
                                        <p className='mx-4 my-2'>80</p>
                                        </td>
                                        <td className="align-middle text-dark px-auto py-auto ps-5">
                                        <input onClick={handleFunction} class="btn btn-primary " type="submit" value="Activate">{    }</input>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                    <nav aria-label="Page navigation example">
  <ul class="pagination my-3 mt-2   ">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
   
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>  
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
export default ActiveProjects
