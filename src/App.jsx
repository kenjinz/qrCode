import { imgQrCode } from './assets';

function App() {
  return (
    <div className="w-screen h-screen bg-light-gray px-6 py-10 items-center justify-center flex">
      <section className=" bg-white flex items-center flex-col rounded-[15px] mobile:w-[320px] ">
        <div className="px-4 py-4 ">
          <img src={imgQrCode} className="rounded-[15px]" />
          <div className="px-3">
            <h1 className="font-bold mt-4 text-center text-dark-blue text-xl">
              Improve your front-end skills by building projects
            </h1>
            <p className="font-normal text-grayish-blue text-[15px] mt-4 text-center">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
