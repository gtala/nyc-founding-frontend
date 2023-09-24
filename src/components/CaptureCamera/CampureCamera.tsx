import type { MouseEventHandler } from "react";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import {ThirdwebSDK} from "@thirdweb-dev/sdk";
import {Web3Storage} from "web3.storage";


const videoConstraints = {
    width: 720,
    height: 720,
    facingMode: "environment",
};


const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUwYjI5QTE1OTcwNEU1MDJmOUU4ODEyOTRhQTA2OTA0NTJFMEQ2QzUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTU1Mzc4OTgxNjQsIm5hbWUiOiJwYWRpdW0ifQ.OgTC0Jyiyxy90pW43qIfkKTwelrQC4UDcaMvzb0WIVQ' });

async function dataURLtoFile(dataurl: string, filename: string)  {
    try {
        const arr = dataurl.split(",");
        //@ts-expect-error: We can be fairly certain this'll pass
        const mime = arr[0]?.match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        const file = new File([u8arr], filename, { type: mime });
        const cid = await client.put([file], { wrapWithDirectory: false })
       return cid
    } catch (err) {
       return ""
    }
}


export const CaptureModal = ({
                                 setIsOpen,
                                 setCID,
                             }: {
    setIsOpen: (state: boolean) => void;
    setCID: (state: string) => void;
}) => {
    const webcamRef = useRef(null);

    const capture: MouseEventHandler = async (e) => {
            // @ts-expect-error: HACK
            const imageBase64 = webcamRef.current.getScreenshot();
            const cidIPFS = await dataURLtoFile(
                imageBase64,
                `capture_${new Date().toISOString()}.jpeg`,
            );

            console.log("cidIPFS result", cidIPFS)
            setCID(cidIPFS)
            setIsOpen(false)
         //   e.stopPropagation();
        }


    return (
        <div className="fixed top-0 bottom-0 left-0 w-screen h-screen z-[9100] overflow-x-hidden overflow-y-scroll p-contentPadding bg-slate-900/30 backdrop-blur-sm">
            <div className="relative flex flex-col w-full max-w-screen-md gap-4 p-4 mx-auto bg-white border-2 border-black border-solid">
                <div className="flex flex-row justify-between w-full">
                    <h3 className="text-2xl font-bold">Take a picture</h3>
                    <button
                        type="button"
                        className="absolute top-4 right-4"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}
                    >

                    </button>
                </div>


                <div className="relative">
                    <Webcam
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={720}
                        videoConstraints={videoConstraints}
                    />

                    <div className="absolute top-0 left-0 flex flex-col items-center justify-end w-full h-full">
                        <button
                            className="mb-6 bg-green-300 border-black rounded-full hover:text-white btn btn-lg btn-ghost hover:bg-green-900 hover:border-white"
                            onClick={async ()=> { await capture()}}
                        >
                            Capture Photo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};