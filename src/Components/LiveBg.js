const LiveBg = () => {
  return (
    <div className="w-full mx-auto aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/hXzcyx9V0xw?si=MhbCfRtTKMTuk-oy&autoplay=1&mute=1&controls=0&rel=0&loop=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default LiveBg;
