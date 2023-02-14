import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const EventsComponent = () => {
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [todayDate, setTodayDate] = useState(new Date());

  const changeCustomer = (val: any) => {
    console.log('val', val);
  }

  const endDateChange = async (date: any) => {
    setEndDate(date);
  };

  const startDateChange = async (date: any) => {
    setStartDate(date);
  };

  const getEventDetail = () => {

  }

  const EventTable = () => {
    return (
      <div className='col-md-12 my-4 report-list'>
        <div className='row mt-5 d-flex justify-content-center'>
          <div className='col-md-11'>
            <div className='row'>
              <div className='col-md-8 d-flex align-items-center'>
                <h2 className='cl-white mr-5'>Events List</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='colored-heading'>
                  <h3 className='cl-white text-left m-0 p-4'>
                    Filters
                  </h3>
                </div>
                <div className='light-card-bg p-4'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <div className='row mb-2'>
                        <div className='col-md-2 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>
                            Customer :
                          </p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-4'>
                          <p className='m-0 cl-white text-left event-style'>
                            <div className='select-dropdown'>
                              <select
                                className='form-control'
                                id='select2'
                                onChange={(e: any) => {
                                  changeCustomer(e.target.value);
                                }}
                                value={''}
                              >
                                <option value={''} >
                                  {'test'}
                                </option>
                                {/* {airCraftsIds.map((aircraft) => {
                          return (
                            <option value={aircraft} key={aircraft}>
                              {aircraft}
                            </option>
                          );
                        })} */}
                              </select>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='row mb-2'>
                        <div className='col-md-4 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>
                            From Date :
                          </p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-8'>
                          <p className='m-0 cl-white text-left'>
                            <div className='mb-3 customDatePickerWidth'>
                              <DatePicker
                                wrapperClassName='datePicker'
                                selected={startDate}
                                onChange={(date: any) => startDateChange(date)}
                                placeholderText='From Date'
                                maxDate={todayDate ? todayDate : null}
                              />
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='row mb-2'>
                        <div className='col-md-4 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>To :</p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-8'>
                          <p className='m-0 cl-white text-left'>
                            <div className='mb-3 customDatePickerWidth'>
                              <DatePicker
                                wrapperClassName='datePicker'
                                selected={endDate}
                                onChange={(date: any) => endDateChange(date)}
                                placeholderText='To Date'
                                maxDate={todayDate ? todayDate : null}
                              />
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='row mb-2'>
                        <div className='col-md-4 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>
                            Aircraft :
                          </p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-8'>
                          <p className='m-0 cl-white text-left event-style'>
                            <div className='select-dropdown'>
                              <select
                                className='form-control'
                                onChange={(e: any) => {
                                  changeCustomer(e.target.value);
                                }}
                                value={'all'}
                              >
                                <option value={'all'} >
                                  {'All'}
                                </option>
                                <option value={'list'} >
                                  {'Pick from list'}
                                </option>
                              </select>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='row mb-2'>
                        <div className='col-md-4 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>
                            Events Type :
                          </p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-8'>
                          <p className='m-0 cl-white text-left event-style'>
                            <div className='select-dropdown'>
                              <select
                                className='form-control'
                                onChange={(e: any) => {
                                  changeCustomer(e.target.value);
                                }}
                                value={'all'}
                              >
                                <option value={'all'} >
                                  {'All'}
                                </option>
                                <option value={'list'} >
                                  {'Pick from list'}
                                </option>
                              </select>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='row mb-2'>
                        <div className='col-md-4 d-flex justify-content-between'>
                          <p className='m-0 cl-white text-left'>
                            Severity :
                          </p>
                          <span className='cl-white'></span>
                        </div>
                        <div className='col-md-8'>
                          <p className='m-0 cl-white text-left event-style'>
                            <div className='select-dropdown'>
                              <select
                                className='form-control'
                                onChange={(e: any) => {
                                  changeCustomer(e.target.value);
                                }}
                                value={'all'}
                              >
                                <option value={'all'} >
                                  {'All'}
                                </option>
                                <option value={'list'} >
                                  {'Pick from list'}
                                </option>
                              </select>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12 mb-3'>
                      <div className='button-block d-flex justify-content-center'>
                        <button
                          type='button'
                          className='btn btn-primary pl-5 pr-5'
                          onClick={getEventDetail}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-12 table-responsive'>
                <table className='table table-striped table-dark mt-5'>
                  <thead>
                    <tr>
                      <th scope='col'>Customer</th>
                      <th scope='col'>Aircraft</th>
                      <th scope='col'>Time</th>
                      <th scope='col'>Type</th>
                      <th scope='col'>Severity</th>
                      <th scope='col'>Location</th>
                      <th scope='col'>Heading</th>
                      <th scope='col'>Velocity (knots)</th>
                      <th scope='col'>Confirmed By</th>
                      <th scope='col'>Comment</th>
                      <th scope='col'>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{'N/A'}</td >
                      <td>{`N/A`}</td>
                      <td>{'N/A'}</td >
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                      <td>{`N/A`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }

  return (
    <React.Fragment>
      <div className='container-fluid content-body vh-100'>
        <div className='loading' style={{ display: loader ? 'block' : 'none' }}>
          <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' />
        </div>
        <div className='row h-100vh-80px'>
          {EventTable()}
        </div>
      </div>

    </React.Fragment>
  );
};

export default EventsComponent;
