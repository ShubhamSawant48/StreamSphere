import LiveBgInfo from "./LiveBgInfo";

const LiveBg = () => {
  return (
    <div className="relative aspect-video ">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/hXzcyx9V0xw?si=rnV2aqJow-mvchtu&autoplay=1&mute=1&controls=0&rel=0&loop=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <LiveBgInfo />
    </div>
  );
};

export default LiveBg;
