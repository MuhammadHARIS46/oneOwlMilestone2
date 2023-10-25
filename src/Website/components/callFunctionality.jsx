import React, { useEffect, useMemo, useState } from "react";
import * as JsSIP from "jssip";
import { io } from "socket.io-client";
import agentImg from "../../assets/images/guy.png";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";
import { Button, Drawer, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

JsSIP.debug.enable("JsSIP:*");

const server = "3.89.170.157";
const socket = new JsSIP.WebSocketInterface("wss://" + server + ":7443");
const userAgent = JsSIP.version;

async function isCameraAvailable() {
  try {
    const constraints = { video: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    stream.getTracks().forEach((track) => track.stop());
    return true;
  } catch (error) {
    return false;
  }
}

const eventHandlers = {
  progress: function (e) {
    console.log("call is in progress");
  },
  failed: function (e) {
    console.log("call failed with cause: " + e.data);
  },
  ended: function (e) {
    console.log("call ended with cause: " + e.data);
  },
  confirmed: function (e) {
    console.log("call confirmed");
  },
};

const outBountOptions = (audio, video) => ({
  eventHandlers: eventHandlers,
  mediaConstraints: { audio, video },
  pcConfig: {
    iceServers: [
      {
        urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
      },
    ],
  },
});

const inBoundOptions = (audio, video) => ({
  mediaConstraints: {
    audio,
    video,
  },
});

const remoteAudio = new window.Audio();
remoteAudio.autoplay = true;

let phone, session, webSocket;

export const CallFunctionality = () => {
  const [callStatus, setCallStatus] = useState(0);
//   const [phoneNumber, setPhoneNumber] = useState("33333333");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [from, setFrom] = useState("");
  // const [user, setUser] = useState('')
  const user = localStorage.getItem("extension");
  const senderExtension = localStorage.getItem("senderExtension");
  useEffect(() => {
    // setUser(user)
    const password = localStorage.getItem("password");
    const configuration = {
      display_name: senderExtension,
      authorization_user: senderExtension,
      sockets: [socket],
      uri: "sip:" + senderExtension + "@" + server + ":5060",
      password: password,
      register_expires: 180,
      session_timers: false,
      user_agent: "JsSip-" + userAgent,
    };
    phone = new JsSIP.UA(configuration);

    phone.on("registrationFailed", function (ev) {
      alert("Registering on SIP server failed with error: " + ev.cause);
    });
    phone.on("newRTCSession", function (ev) {
      session = ev.session;
      const completeSession = function (e) {
        setCallStatus(0);
        session = null;
      };

      session.on("ended", completeSession);
      session.on("failed", completeSession);
      session.on("accepted", function () {
        console.log("call accepted");
      });
      session.on("confirmed", function (e) {
        const localStream = session.connection.getLocalStreams()[0];
        const remoteStream = session.connection.getRemoteStreams()[0];
        remoteAudio.srcObject = remoteStream;

        const dtmfSender = session.connection.createDTMFSender(
          localStream.getAudioTracks()[0]
        );
        session.sendDTMF = function (tone) {
          dtmfSender.insertDTMF(tone);
        };

        setCallStatus(3);
        if (session.direction === "incoming") {
          setFrom(e?.ack?.from?._display_name);
        } else {
          setFrom(senderExtension);
        }
      });

      if (session.direction === "incoming") {
        setCallStatus(2);
      }
    });

    phone.start();

    // webSocket = io("ws://34.236.189.205", {
    //   transports: ["websocket"],
    // });
    webSocket = io ("ws://3.89.170.157",{
        transports: ["websocket"],
    })
    webSocket.on("message", (data) => {
      console.log("message received", data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: data.sender,
          message: data.message,
        },
      ]);
      setMessage("");
    });

    return () => {
      webSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (callStatus === 3) {
      const selfViewer = document.getElementById("selfViewer");
      selfViewer.srcObject = session.connection.getLocalStreams()[0];
      selfViewer.play();

      const remoteViewer = document.getElementById("remoteViewer");
      remoteViewer.srcObject = session.connection.getRemoteStreams()[0];
      remoteViewer.play();
    }
  }, [callStatus]);

  const isOpen = useMemo(() => callStatus > 0, [callStatus]);
  const token = localStorage.getItem("token");
  const makeCall = async () => {
    if (!user) {
      alert("set phone number!");
      return;
    }
    setCallStatus(1);

    const callParams = (await isCameraAvailable())
      ? [true, true]
      : [true, false];

    phone.call(
      `sip:${user}@3.89.170.157:5060`,
      outBountOptions(...callParams)
    );

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      receiver: user,
    };

    try {
      const response = await axios.post(
        "http://54.210.253.228/api/call/start",
        data,
        {
          headers: headers,
        }
      );

      // Handle the response as needed
      console.log("Call start response:", response.data);
    } catch (error) {
      // Handle any errors here
      console.error("Error making the call start request:", error);
    }
  };

  const handleIncomingCallAccept = async () => {
    const callParams = (await isCameraAvailable())
      ? [true, true]
      : [true, false];
    console.log("callParams", callParams);
    session.answer(inBoundOptions(...callParams));
  };

  const handleIncomingCallReject = () => {
    session.terminate();
    setCallStatus(0);
  };

  const sendMessage = () => {
    if (message) {
      webSocket.emit("message", { message, sender: user });
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: user,
          message: message,
        },
      ]);
      setMessage(" ");
    }
  };
  const toggleVideo = () => {
    const localStream = session.connection.getLocalStreams()[0];
    const videoTrack = localStream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
    }
  };

  return (
    <React.Fragment>
      <div className="CommunicationComponent">
        <div className="communicationHeader">
          <div className="communicationAbout">
            <img src={agentImg} alt="" />
            <span>Agent Name</span>
          </div>
          <div className="communicationControls">
            <button onClick={makeCall}>
              <BsTelephoneFill />
            </button>
            <FaVideo />
          </div>
        </div>
        <div className="communicationMsgBody">
          {messages.map((item, keyId) => (
            <div key={keyId}>
              {/* <b>{item.sender}:</b> */}
              <p className="message">{item.message}</p>
            </div>
          ))}
        </div>

        <div className="communicationChat">
          <input
            type="text"
            placeholder="Start Conversation..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sendChatButton" onClick={sendMessage}>
            <PiPaperPlaneTiltBold />
          </button>
        </div>
      </div>

      <Drawer
        open={isOpen}
        closable={false}
        style={{ opacity: "0.5", backgroundColor: "grey" }}
        width="100%"
      >
        {callStatus === 1 && (
          <>
            <span style={{ fontSize: 24, color: "white" }}>...Dialing</span>
            &nbsp;
            <Spin
              indicator={
                <LoadingOutlined rev="true" style={{ fontSize: 24 }} spin />
              }
            />
            <Button onClick={handleIncomingCallReject}>Reject</Button>
          </>
        )}
        {callStatus === 2 && (
          <>
            <Button onClick={handleIncomingCallAccept}>Accept</Button>
            <Button onClick={handleIncomingCallReject}>Reject</Button>
          </>
        )}
        {callStatus === 3 && (
          <>
            <Row>
              <div style={{ fontSize: 24, color: "white", opacity: 1 }}>
                Call With {from}
              </div>
              &nbsp;
              <Button onClick={handleIncomingCallReject}>Reject</Button>
              <Button onClick={toggleVideo}>Toggle Video</Button>
            </Row>
            <Row>
              <video id="selfViewer" width={400} height={400} />
              <video id="remoteViewer" width={400} height={400} />
            </Row>
          </>
        )}
      </Drawer>
    </React.Fragment>
  );
};
