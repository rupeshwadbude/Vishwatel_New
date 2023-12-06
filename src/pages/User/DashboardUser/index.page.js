import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PageHeader, RangeSlider } from "../../../components";

function DashboardUser() {

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Get started with Vishwatel" />
        </div>
      </div>
      
      <div>
        <Row className="mb-4">
          <Col md={10}>
            <div className='p-4 bg-white'>
              <div className="rangeSliderform-group mb-5">
                <RangeSlider defaultValue={30} />
              </div>
              <ul className="rangeSliderList list-unstyled mb-0">
                <li className="rangeSliderList_list active">
                  <div className="text-center">
                    <em className="icon ni ni-check-circle-fill"/>
                      <p className="mb-0">Add Company logo</p>
                  </div>
                </li>
                <li className="rangeSliderList_list">
                  <div className="text-center">
                    <em className="icon ni ni-check-circle-fill"/>
                      <p className="mb-0">Add your profile photo</p>
                  </div>
                </li>
                <li className="rangeSliderList_list">
                  <div className="text-center">
                    <em className="icon ni ni-check-circle-fill"/>
                      <p className="mb-0">Invites teammates</p>
                  </div>
                </li>
                <li className="rangeSliderList_list">
                  <div className="text-center">
                    <em className="icon ni ni-check-circle-fill"/>
                      <p className="mb-0">Setup Customer services</p>
                  </div>
                </li>
                <li className="rangeSliderList_list">
                  <div className="text-center">
                    <em className="icon ni ni-check-circle-fill"/>
                      <p className="mb-0">Create a team</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
              <Row>
                <Col md={4}>
                    <div className='userCards text-center'>
                      <em className="icon ni ni-headphone-fill"/>
                      <h3>Chat with Customers</h3>
                      <p>Website chat, social media, email and calls.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='userCards text-center'>
                      <em className="icon ni ni-chat-circle-fill"/>
                      <h3>Chat with Customers</h3>
                      <p>Website chat, social media, email and calls.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='userCards text-center'>
                      <em className="icon ni ni-call-fill"/>
                      <h3>Chat with Customers</h3>
                      <p>Website chat, social media, email and calls.</p>
                    </div>
                </Col>
              </Row>
          </Col> 
        </Row>

        <Row className='mt-4'>
          <Col md={10}>
              <Row>
                <Col md={4}>
                    <div className='userVideos'>
                      <h3>Chat with Customers</h3>
                      <p>Website chat, social media, email and calls.Website chat, social media, email and calls.Website chat, social media, email and calls.</p>
                      <div className='position-relative'>
                        <img src="/assets/images/admin/files.jpg" className='img-fluid' alt='img'/>
                        <Link to="#">
                          <em className='icon ni ni-play-fill'/>
                        </Link>
                      </div>
                    </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DashboardUser