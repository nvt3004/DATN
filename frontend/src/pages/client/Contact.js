import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import iconEmail from "../../assets/images/icons/icon-email.png"

const Contact = () => {
  
  // API Key của bạn
  const API_KEY = 'AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes';
  
  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  
  const center = {
    lat: 10.0452,
    lng: 105.7460,
  };
  
  
  
  const style ={
    m:{marginTop:"80px"},
    bkg:{backgroundImage: "url('images/bg-01.jpg')" }
  };
  return (
    <div style={style.m}>
      {/* <!-- Title page --> */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={style.bkg}
      >
        <h2 className="ltext-105 cl0 txt-center">Contact</h2>
      </section>

      {/* <!-- Content page --> */}
      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <form>
                <h4 className="mtext-105 cl2 txt-center p-b-30">
                  Send Us A Message
                </h4>

                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  <img
                    className="how-pos4 pointer-none"
                    src={iconEmail}
                    alt="ICON"
                  />
                </div>

                <div className="bor8 m-b-30">
                  <textarea
                    className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                    name="msg"
                    placeholder="How Can We Help?"
                  ></textarea>
                </div>

                <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                  Submit
                </button>
              </form>
            </div>

            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-map-marker"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Address</span>

                  <p className="stext-115 cl6 size-213 p-t-18">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>

              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-phone-handset"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Lets Talk</span>

                  <p className="stext-115 cl1 size-213 p-t-18">+1 800 1236879</p>
                </div>
              </div>

              <div className="flex-w w-full">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-envelope"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Sale Support</span>

                  <p className="stext-115 cl1 size-213 p-t-18">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Map --> */}
      <div className="map">
      <LoadScript googleMapsApiKey={API_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
    >
      {/* Các thành phần khác có thể thêm vào bản đồ ở đây */}
    </GoogleMap>
  </LoadScript>
      </div>
    </div>
  );
};
export default Contact;
