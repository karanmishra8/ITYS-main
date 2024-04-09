import { Col, Row, Form, Card, Button, Image } from "react-bootstrap";
import Link from "next/link"
import { LifeBuoy } from "react-feather";
import { FormSelect, DropFiles } from "widgets";
import { Table, Alert } from 'react-bootstrap';

  
import EmailSetting from "./EmailSetting";
import DeleteAccount from "./DeleteAccount";
import Notifications from "./Notifications";
import Preferences from "./Preferences";
import { useRouter } from 'next/router'
import { useRef } from "react";
import { useState } from "react";

const GeneralSetting = () => {



  const notificationOptions = [
    { value: 'Always', label: 'Always' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const dailyDigestOptions = [
    { value: 'Everyday', label: 'Everyday' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const timeOptions = [
    { value: '2PM', label: '2PM' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const AlertDismissible = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          To start using Slack for personal notifications, you should first connect Slack.
        </Alert>
      );
    }
  }







  const router = useRouter()
  const countryOptions = [
    { value: "India", label: "India" },
    { value: "US", label: "US" },
    { value: "UK", label: "UK" },
    { value: "UAE", label: "UAE" },
  ];
   //prefrences

   const langaugeOptions = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Arabic', label: 'Arabic' }
  ];

  const timeZoneOptions = [
    { value: 'GMT +5.30', label: 'GMT +5.30' },
    { value: 'GMT +5.30', label: 'GMT +5.30' },
    { value: 'GMT +5.30', label: 'GMT +5.30' },
    { value: 'GMT +5.30', label: 'GMT +5.30' }
  ];

  const dateFormatOptions = [
    { value: 'No Preference', label: 'No Preference' },
    { value: 'Preference', label: 'Preference' }
  ];




    const emailSettingsRef = useRef(null);
  
    const scrollToEmailSettings = () => {
      emailSettingsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const DeleteRef = useRef(null);
  
    const scrollToDelete = () => {
      DeleteRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const PrefRef = useRef(null);
  
    const scrollToPref = () => {
      PrefRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const NotiRef = useRef(null);
  
    const scrollToNoti = () => {
      NotiRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
    <Row className="mb-8">
      
      
      <Col xl={3} lg={4} md={12} xs={12}>
      
        <div className="mb-4 mb-lg-0 py-2 bg-white px-3 hover-overlay">
            <Link href='/'>General Settings</Link>
          <p className="mb-0 fs-5 text-muted">Add an settings to profile </p>
         
        </div> 
        <div className="mb-4 mb-lg-0 py-2 px-3" >
        <Link href='' >Email Settings</Link>
        <br></br>
          <a onClick={scrollToEmailSettings} className=" text-muted btn-sm rounded ">Scroll to Email Settings</a>
        </div>
        <div className="mb-4 mb-lg-0 py-2 bg-white px-3">
        <Link href="/settings/Preferences" >Preferences</Link>
        <br></br>
          <a onClick={scrollToPref } className="text-muted btn-sm rounded ">Scroll to Preferences Settings</a>
        </div>
        <div className="mb-4 mb-lg-0 py-2  px-3">
        <Link href='/settings/Notifications' >Notifications Settings</Link>
        <br></br>
        <a onClick={scrollToNoti} className="text-muted btn-sm rounded ">Scroll to Email Settings</a>
        </div>
        <div className="mb-4 mb-lg-0 py-2 bg-white px-3" >
        <Link href='/DeleteAccount'>Delete  Settings</Link>
          {/* <p className="mb-0 fs-5 text-muted">Easily set up accounts</p> */}
          <br></br>
          <a onClick={scrollToDelete} className="bg-white text-muted btn-sm rounded ">Scroll to Email Settings</a>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            <div className=" mb-6">
              <h4 className="mb-1">General Settings</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Avatar</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image
                      src="/images/avatar/avatar-5.jpg"
                      className="rounded-circle avatar avatar-lg"
                      alt=""
                    />
                  </div>
                  <div>
                    <Button
                      variant="outline-white"
                      className="me-2"
                      type="submit"
                    >
                      Change{" "}
                    </Button>
                    <Button variant="outline-white" type="submit">
                      Remove{" "}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            {/* col */}
            <Row className="mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                {/* heading */}
                <h5 className="mb-0">Cover photo</h5>
              </Col>
              <Col md={9}>
                {/* dropzone input */}
                <div>
                  <Form
                    action="#"
                    className="dropzone mb-3 py-10 border-dashed"
                  >
                    <DropFiles />
                  </Form>
                  <Button variant="outline-white" type="submit">
                    Change{" "}
                  </Button>
                </div>
              </Col>
            </Row>
            <div>
              {/* border */}
              <div className="mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div>
              <Form>
                {/* row */}
                <Row className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="col-sm-4 col-form-label
                    form-label"
                  >
                    Full name
                  </label>
                  <div className="col-sm-4 mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      id="fullName"
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      id="lastName"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <label
                    htmlFor="email"
                    className="col-sm-4 col-form-label
                    form-label"
                  >
                    Email
                  </label>
                  <div className="col-md-8 col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">
                    Phone <span className="text-muted">(Optional)</span>
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone"
                      id="phone"
                    />
                  </Col>
                </Row>

                {/* Location */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="country">
                    Location
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      as={FormSelect}
                      placeholder="Select Country"
                      id="country"
                      options={countryOptions}
                    />
                  </Col>
                </Row>

                {/* Address Line One */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">
                    Address line 1
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address line 1"
                      id="addressLine"
                      required
                    />
                  </Col>
                </Row>

                {/* Address Line Two */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLineTwo">
                    Address line 2
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address line 2"
                      id="addressLineTwo"
                      required
                    />
                  </Col>
                </Row>

                {/* Zip code */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="zipcode">
                    Zip code
                    <i className="fe fe-info fs-4 me-2 text-muted icon-xs"></i>
                  </Form.Label>

                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Zip code"
                      id="zipcode"
                      required
                    />
                  </Col>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>


    <div id="email-settings" ref={emailSettingsRef}>
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Email Setting</h4>
          <p className="mb-0 fs-5 text-muted">Add an email settings to profile </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">
          {/* card body */}
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Email</h4>
            </div>
            <Form>
              {/* New email */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newEmailAddress">New email</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="email" placeholder="Enter your email address" id="newEmailAddress" required />
                </Col>
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-3">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
            <div className="mb-6 mt-6">
              <h4 className="mb-1">Change your password</h4>
            </div>
            <Form>

              {/* Current password */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="currentPassword">Current password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Enter Current password" id="currentPassword" required />
                </Col>
              </Row>

              {/* New password */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newPassword">New password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Enter New password" id="newPassword" required />
                </Col>
              </Row>

              {/* Confirm new password */}
              <Row className="align-items-center">
                <Form.Label className="col-sm-4" htmlFor="confirmNewpassword">Confirm new password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Confirm new password" id="confirmNewpassword" required />
                </Col>
                {/* list */}
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                  <h6 className="mb-1">Password requirements:</h6>
                  <p>Ensure that these requirements are met:</p>
                  <ul>
                    <li> Minimum 8 characters long the more, the better</li>
                    <li>At least one lowercase character</li>
                    <li>At least one uppercase character</li>
                    <li>At least one number, symbol, or whitespace character
                    </li>
                  </ul>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
              
            </Form>

          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div id="delete" ref={DeleteRef} >
     
    <Row>
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Delete Account</h4>
          <p className="mb-0 fs-5 text-muted">Easily set up social media accounts</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card className="mb-6">
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Danger Zone </h4>
            </div>
            <div>
              <p>Delete any and all content you have, such as articles, comments, your reading list or chat messages. Allow your username to become available to anyone.</p>
              <Link href="#" className="btn btn-danger">Delete Account</Link>
              <p className="small mb-0 mt-3">Feel free to contact with any <Link href="#"></Link> questions.</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>


    </div>
    </div>
    
   <div id="pref" ref={PrefRef}>
   <Row className="mb-8">
        <Col xl={3} lg={4} md={12} xs={12}>
          <div className="mb-4 mb-lg-0">
            <h4 className="mb-1">Preferences</h4>
            <p className="mb-0 fs-5 text-muted">Configure your preferences </p>
          </div>
        </Col>
        <Col xl={9} lg={8} md={12} xs={12}>
          <Card id="preferences">
            <Card.Body>
              <div className="mb-6">
                <h4 className="mb-1">Preferences</h4>
              </div>
              <Form>

                {/* Langauge */}
                <Row className="mb-3">
                  <Form.Label className="col-md-4" htmlFor="langauge">Langauge</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect}
                      defaultselected="English"
                      placeholder="Select Langauge"
                      id="langauge"
                      options={langaugeOptions} />
                  </Col>
                </Row>

                {/* Time Zone */}
                <Row className="mb-3">
                  <Form.Label className="col-md-4" htmlFor="timeZone">Time Zone</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect}
                      defaultselected='GMT +5.30'
                      placeholder="Select Langauge"
                      id="timeZone"
                      options={timeZoneOptions} />
                  </Col>
                </Row>

                {/* Date Format */}
                <Row className="mb-3">
                  <Form.Label className="col-md-4" htmlFor="dateFormat">Date Format</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect}
                      defaultselected='No Preference'
                      placeholder="Select Langauge"
                      id="dateFormat"
                      options={dateFormatOptions} />
                  </Col>
                </Row>

                {/* Default*/}
                <Row className="mb-3">
                  <Form.Label className="col-md-4" htmlFor="default">Default</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Check id="customRadioInline1" className="form-check-inline" >
                      <Form.Check.Input type="radio" name="customRadioInline" />
                      <Form.Check.Label>On</Form.Check.Label>
                    </Form.Check>
                    <Form.Check id="customRadioInline2" className="form-check-inline"  >
                      <Form.Check.Input type="radio" name="customRadioInline" />
                      <Form.Check.Label>Off</Form.Check.Label>
                    </Form.Check>
                  </Col>
                </Row>

                {/* Choose option default */}
                <Row className="mb-3">
                  <Form.Label as={Col} md={4} htmlFor="default">Choose option default</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Check id="customChecktellMe" >
                      <Form.Check.Input type="checkbox" name="customChecktellMe" />
                      <Form.Check.Label>Tell me</Form.Check.Label>
                    </Form.Check>
                    <Form.Check id="customOpenEmail"  >
                      <Form.Check.Input type="checkbox" name="customOpenEmail" />
                      <Form.Check.Label>Open e-mail</Form.Check.Label>
                    </Form.Check>
                    <Form.Check id="customShowDefault"  >
                      <Form.Check.Input type="checkbox" name="customShowDefault" />
                      <Form.Check.Label>Show default</Form.Check.Label>
                    </Form.Check>
                  </Col>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-2">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>

                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   </div>

   <div id="notifi" ref={NotiRef}>
   <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Notifications</h4>
          <p className="mb-0 fs-5 text-muted">Change notification settings </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card >
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Notification for email, mobile & Slack</h4>
            </div>
            <div className="mb-4">
              {/* alert */}
              <AlertDismissible />
            </div>
            {/* table */}
            <div className="table-responsive mb-3">
              <Table className="text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th className="w-75">Activity & Conversation</th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-top-0">
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckOne" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTwo" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckThree" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When a Files is shared with a team
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFour" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFive" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone requests access to my design
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckSix" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckSeven" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckEight" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone comments in threads I’m following
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckNine" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTen" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckEleven" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone @mentions me in any comments
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTwelve" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                  </tr>
                </tbody>
              </Table >
            </div>
            <div className="table-responsive mb-3">
              <Table className="text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th className="w-75">Project activity</th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-top-0">
                      When someone adds me to a project
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckThirteen" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFourteen" />
                    </td>
                  </tr>
                </tbody>
              </Table >
            </div>
            <Table responsive className="mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th className="w-75">Team activity</th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-top-0">
                    When my invitees sign up
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckSixteen" />
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckSeventeen" />
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckEighteen" />
                  </td>
                </tr>
                <tr>
                  <td className="border-top-0">
                    When someone requests access to my team
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckNineteen" />
                  </td>
                  <td className="border-top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckNineteen" />
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0">
                    When someone invites me to a team
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentyone" />
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentytwo" />
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentythree" />
                  </td>
                </tr>
              </tbody>
            </Table >
            <hr className="my-6" />
            <Row>
              <Col xl={6} md={12} className="mb-3">
                <Form.Label htmlFor="notification">When should we send you notifications?</Form.Label>
                <Form.Control as={FormSelect} defaultselected="Always" id="notification" options={notificationOptions} />
              </Col>
              <Col xl={3} md={6} className="mb-3">
                <Form.Label htmlFor="dailyDigest">Daily Digest</Form.Label>
                <Form.Control as={FormSelect} defaultselected="Everyday" id="dailyDigest" options={dailyDigestOptions} />
              </Col>
              <Col xl={3} md={6} className="mb-3">
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Control as={FormSelect} defaultselected="2PM" id="time" options={timeOptions} />
              </Col>
              <Col xl={3} md={12}>
                <Button variant="primary" type="submit">Save Changes</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
   </div>


</div>
  );
};

export default GeneralSetting;
