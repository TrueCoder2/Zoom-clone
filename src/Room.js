import React from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";

function Room(){
    const {roomID} = useParams();
    let myMeeting = async (element) => {
        const appID = 611104596;
        const serverSecret = "5661c346699b8aaab30e68b089cfd227";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Abhishek" );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            // sharedLinks: [
            //   {
            //     name: 'Personal link',
            //     url:
            //      window.location.protocol + '//' + 
            //      window.location.host + window.location.pathname +
            //       '?roomID=' +
            //       roomID,
            //   },
            // ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    }
    return(
        <div> ref={myMeeting} </div>
    )
}

export default Room