import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, Col, Row } from "react-bootstrap";
import { Breadcrumb, PageHeader, Select } from "../../../components";

function Dashboard() {
  const breadcrumb = [
    {
      path: "#",
      name: "DASHBOARD",
    },
  ];

  const options1 ={
    chart: {
        type: 'spline',
      },
      title: {
          text: '',
      },
      xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify',
              style: {
                color: '#B5B5C3'
              }
          },
          lineColor: '#e6e6e6',
          tickColor:'#e6e6e6'
      },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
            style: {
                color: '#B5B5C3'
            }
          },
          minorGridLineWidth: 1,
          gridLineWidth: 1,
          gridLineDashStyle: 'longdash',
          alternateGridColor: null,
      },
      tooltip: {
          valueSuffix: ' m/s',
          // shared: true,
          useHTML: true,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          padding: 0,
          headerFormat: '<div class="chartTooltip"><div class="chartTooltip-header"><h5>{point.key}</h5></div>',
          pointFormat: '<div class="chartTooltip-data"><p style="color: {series.color}">{series.name} : <b>{point.y}</b></p></div>',
          footerFormat: '</div>',
          valueDecimals: 2
      },
      plotOptions: {
          spline: {
              lineWidth: 4,
              states: {
                  hover: {
                      lineWidth: 5
                  }
              },
              marker: {
                  enabled: false
              },
              pointInterval: 3600000, // one hour
              pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
          },
      },
      colors: ['orange', "black"],
      style: {
        textOutline: false
      },
      series: [{
          name: 'Students',
          data: [5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1,
              5.6, 5.9, 7.1, 8.6, 7.8, 8.6,
              8.0, 9.7, 11.2, 12.5, 13.1, 10.6,
              10.9, 8.9, 9.5, 7.5, 3.5, 4.2],
      }, {
          name: 'Teachers',
          data: [2, 3, 1, 3, 1,2, 1.1,
              2.2, 3.1, 3.5, 1.1, 1.1, 1.3,
              2.0, 1.5, 1.5, 1.5, 1.4, 1.7,
              2.0, 2.9, 2.1, 2.1, 3.5, 2.9],
      }],
      
      credits: {
          enabled: false
      },
}
const barChartOptions1 = {
    chart: {
      type: 'column'
    },
    title: {
        text: ''
    },
    colors: [ '#134d9f', "#4986dd"],
    xAxis: {
      labels: {
          style: {
              color: '#B5B5C3'
          }
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      lineColor: '#e6e6e6',
      tickColor:'#e6e6e6'
    },
    yAxis: {
      title: {
          text: ''
      },
      labels: {
        style: {
            color: '#B5B5C3'
        }
      },
      minorGridLineWidth: 1,
      gridLineWidth: 1,
      gridLineDashStyle: 'longdash',
      alternateGridColor: null,
    },
    credits: {
        enabled: false
    },
    tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        shadow: false,
        padding: 0,
        headerFormat: '<div class="chartTooltip"><div class="chartTooltip-header"><h5>{point.key}</h5></div>',
        pointFormat: '<div class="chartTooltip-data"><p style="color: {series.color}">{series.name} : <b>{point.y}</b></p></div>',
        footerFormat: '</div>',
        valueDecimals: 2
    },
    plotOptions: {
        series: {
            pointWidth: 12
        },
        column: {
            borderRadius: '100%'
        },
    },
    series: [
        {
            data: [100, 70, 60, 80, 50, 68, 78, 30, 52, 85, 30, 45]
        },
        {
            data: [56, 54, 45, 100, 54, 87, 78, 44, 75, 10, 56, 47]
        }
    ]
  }
const filterOptions = [
    {id: 1, name: "Weekly"},
    {id: 2, name: "Monthly"},
    {id: 3, name: "Yearly"}
]


  // Data for the donut chart
    const chartData = [
        { name: 'Category 1', y: 30, color: 'orange' },
        { name: 'Category 2', y: 20, color: 'block'},
        { name: 'Category 3', y: 50, color: 'grey'},
    ];

    const options3 = {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Donut Chart',
        },
        plotOptions: {
            pie: {
                innerSize: '60%', // Adjust the inner size to create a donut chart
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
            },
        },
        series: [
            {
                name: 'Categories',
                data: chartData,
            },
        ],
    }

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Dashboard">
            <Breadcrumb breadcrumb={breadcrumb} />
          </PageHeader>
        </div>
      </div>
      <div className="nk-block">
        <div className="dashboardTiles nk-store-statistics">
          <Row className="g-2 g-xxl-4">
          <Col xxl={6}>
                    <Card className="mb-0 border-0 h-100">
                        <Card.Header>
                            <div className="filterHead d-flex justify-content-between align-items-center">
                                <div className="heading mb-sm-0 mb-2">
                                    <Card.Title as="h5" className="mb-0">Overview</Card.Title>
                                    <p className="mb-0 text-light fs-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <Select size="small" placeholder="Select" defaultValue="Weekly" arrayOfData={filterOptions} />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options1}
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card className="mb-0 border-0 h-100">
                        <Card.Header>
                            <div className="filterHead d-flex justify-content-between align-items-center">
                                <div className="heading mb-sm-0 mb-2">
                                    <Card.Title as="h5" className="mb-0">Students Strength</Card.Title>
                                    <p className="mb-0 text-light fs-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <Select size="small" placeholder="Select" defaultValue="Weekly" arrayOfData={filterOptions} />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={barChartOptions1}
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card className="mb-0 border-0 h-100">
                        <Card.Header>
                            <div className="filterHead d-flex justify-content-between align-items-center">
                                <div className="heading mb-sm-0 mb-2">
                                    <Card.Title as="h5" className="mb-0">Students Strength</Card.Title>
                                    <p className="mb-0 text-light fs-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <Select size="small" placeholder="Select" defaultValue="Weekly" arrayOfData={filterOptions} />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <HighchartsReact highcharts={Highcharts} options={options3} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
