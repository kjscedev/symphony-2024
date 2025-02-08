function Home() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="bg loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-[60vh] w-[50vw] m-auto relative z-10"></div>
    </div>
  );
}

export default Home;
