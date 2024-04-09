import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";

//Post page
const Pricing = () => {
  return (
    <Row className="mt-6 px-5 me-4 ms-1">
        <div className="border-bottom pb-4 mb-4 ">
          <h3 className="mb-0 fw-bold">Post</h3>
        </div>
    <Col md={12} xs={12}>
        <Card>
            
            <Card.Header className="bg-white  py-4">
                <h4 className="mb-0">Active Posts</h4>
            </Card.Header>
            <Table responsive className="text-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th>Thumbnail</th>
                        <th>Description</th>
                        <th>Created at</th>
                        <th>Created by</th>
                        <th>Likes count</th>
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
                                                <Link href="#" className="text-inherit">{item.projectName} posts</Link></h5>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">{item.hours}</td>
                                <td className="align-middle"><span className> 4:00 pm today</span></td>
                                <td className="align-middle">
                                    <div className="avatar-group">
                                        {item.members.map((avatar, avatarIndex) => {
                                            return (
                                                <span className="avatar avatar-sm" key={avatarIndex}>
                                                    <Image alt="avatar" src={avatar.image} className="" />
                                                </span>
                                            )
                                        })}
                                        <span className="avatar avatar-sm avatar-primary">
                                        <span> 12/2/2024</span>
                                        </span>
                                    </div>
                                </td>
                                <td className="align-middle text-dark">
                                <p className='mx-4 my-2'>80</p>
                                </td>
                                <td className="align-middle text-dark px-auto py-auto ps-5">
                                        <input class="btn btn-primary" type="submit" value="Activate"></input>
                                        </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Card.Footer className="bg-white text-center">
            <nav aria-label="Page navigation example">
  <ul class="pagination my-3">
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

export default Pricing