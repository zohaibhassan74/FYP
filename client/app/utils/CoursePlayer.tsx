import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const myStyles = {
  border: '0',
  height: '360px',
  width: '640px',
  maxWidth: '100%',
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src="https://player.vdocipher.com/v2/?otp=20160313versASE32350s2n6HiRSuUALwbLrdvsnAhTisVOT4D3FwUpfSdd3KOrN&playbackInfo=eyJ2aWRlb0lkIjoiNmVkODY1MmYzZmI3NzI4ZDAzYTg1NzkwY2EwNTg4MTIifQ=="
          style={myStyles}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;

{
  /* <div style="padding-top:41%;position:relative;">
<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323qSba2cKMM0hixwBJpBD3R7AjNYrcwtRHnLfGB4bR6l0YFV&playbackInfo=eyJ2aWRlb0lkIjoiNmVkODY1MmYzZmI3NzI4ZDAzYTg1NzkwY2EwNTg4MTIifQ==" style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" allowFullScreen="true" allow="encrypted-media"></iframe>
</div>  */
}
