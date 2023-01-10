import React, { useState, useEffect } from "react";
import LiveTrackingMap from "./LiveTrackingMap";
import MapViewContainer from "./MapViewContainer";
import {Dailogmodal1, Dailogmodal2} from "./dailogModal";
import { useDispatch } from "react-redux";
import { ViewsConstants } from "../../Constants/constants";
// import  MapContainer  from "./map-view";

function View(props: any) {
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 300)
    }, [])

    useEffect(() => {
        return () => {
          console.log("cleaned up");
          dispatch({
            type: ViewsConstants.VIEW_CLEAR_DATA,
            value: {},
        });
        };
      }, []);

    return <React.Fragment>
        <div className="loading" style={{ display: loader ? 'block' : 'none' }}><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" /></div>
        <div className="container-fluid content-body vh-100">
            <div className="row">
                <div className='craftAnalitic-detail d-flex align-items-center justify-content-between p-4 craftAnalitic-detail-view'>
                    <div className='d-flex leftBox-area'>
                        <div className='d-flex align-items-center'>
                            <div className='loader-circle'></div>
                            <h2>
                                67%
                                <span className='d-block'>Fuel</span>
                            </h2>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='loader-circle yellow-circle'></div>
                            <h2>
                                300 KTS
                                <span className='d-block'>True Air Speed</span>
                            </h2>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='loader-circle green-circle'></div>
                            <h2>
                                290KTS
                                <span className='d-block'>Ground Speed</span>
                            </h2>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <i className='fas fa-ellipsis-v fa-icon-size'></i>
                    </div>
                </div>
                <LiveTrackingMap />
                <div className='col-md-9 my-4'>
                    <div className='maparea-container-view mb-4'>
                        <MapViewContainer {...props}></MapViewContainer>
                    </div>
                </div>
            </div>
            <Dailogmodal1 />
            <Dailogmodal2 />
        </div>
    </React.Fragment>
}

export default View;