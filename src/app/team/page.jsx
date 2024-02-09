const team = () => {
  return (
    <div className="pt-20 w-[100vw] h-[100vh] bg-[url('https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover flex flex-col items-center">
      <div className="w-[50%] min-h-[200px] relative flex flex-row">
        <h1 className="text-[rgb(20,20,20,0.5)] text-7xl">02.</h1>
        <h2 className="absolute left-20 top-7 text-xl">CLIMB</h2>
        <p className="pl-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic
          illum magnam unde omnis voluptatem dolore voluptate vel nisi inventore
          nihil aliquid doloremque, accusamus at, porro quos eligendi obcaecati
          temporibus?
        </p>
      </div>
      <div className="w-full flex justify-center bg-[rgba(0,0,0,0.7)]">
        <div className="flex flex-row gap-10 w-[50%]">
          <div className="bg-gray-300 py-1">
            <h2 className="text-blue-800 underline font-bold  cursor-pointer">
              MOUNTAIN 1
            </h2>
          </div>
          <div className="py-1">
            <h2 className="text-gray-200 underline font-bold  cursor-pointer">
              MOUNTAIN 2
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.5)] p-5 mt-20 mr-32">
        <h2 className="text-blue-800 font-bold text-xl">SCHEDULE</h2>
        <div className="flex gap-10 text-gray-800">
          <p>25 nov 2016</p>
          <p>Vestibulum viverra</p>
        </div>
        <div className="flex gap-10 text-gray-800">
          <p>25 nov 2016</p>
          <p>Vestibulum viverra</p>
        </div>
        <div className="flex gap-10 text-gray-800">
          <p>25 nov 2016</p>
          <p>Vestibulum viverra</p>
        </div>
        <div className="flex gap-10 text-gray-800">
          <p>25 nov 2016</p>
          <p>Vestibulum viverra</p>
        </div>
      </div>
    </div>
  );
};

export default team;
