import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageHeader } from '../../../components'

function DashboardUser() {


  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="User | Dashboard" />
        </div>
      </div>
      
      <div>
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

        <Row className='mt-5'>
          <Col md={10}>
              <Row>
                <Col md={4}>
                    <div className='userVideos'>
                      <h3>Chat with Customers</h3>
                      <p>Website chat, social media, email and calls.Website chat, social media, email and calls.Website chat, social media, email and calls.</p>
                      <div className='position-relative'>
                        <img src="/assets/images/admin/files.jpg" className='img-fluid' alt='img'/>
                        <em className='icon ni ni-play-fill'/>
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