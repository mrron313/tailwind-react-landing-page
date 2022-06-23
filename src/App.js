import './App.css';

function App() {
  return (
    <div>
      {/* Main Top Header/Menu */}
      <div className="w-full bg-cover bg-center" style={{ height:'50rem', backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'}}>
        <div className="flex flex-col h-full w-full bg-gray-900 bg-opacity-50 md:justify-between md:items-center">

          <div className="container px-6 py-3 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className='flex justify-between items-center'>
                <div className="text-xl font-semibold">
                  <a href="/" className="text-xl font-bold hover:text-orange-main md:text-2xl">Brand</a>
                </div>
                <div className="flex md:hidden">
                  <button type="button" className="hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="hidden -mx-4 md:flex md:items-center md:ali">
                <a href="/" className="block mx-4 mt-2 md:mt-0 text-sm capitalize hover:text-orange-soft">Web developers</a>
                <a href="/" className="block mx-4 mt-2 md:mt-0 text-sm capitalize hover:text-orange-soft">Web Designers</a>
                <a href="/" className="block mx-4 mt-2 md:mt-0 text-sm capitalize hover:text-orange-soft">UI/UX Designers</a>
                <a href="/" className="block mx-4 mt-2 md:mt-0 text-sm capitalize hover:text-orange-soft">Contact</a>
              </div>
            </div>
          </div>

          <div className="md:items-start">
            <h1 className="text-orange-main text-3xl font-semibold uppercase md:text-base">My Name is Jessica Alba</h1>
            <p className='text-primary md:text-6xl md:w-46'>I Am A Creative UI/UX Designer From London.</p>
            <p className='text-slate-300 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button className="mt-4 px-4 py-2 bg-orange-main text-white text-sm uppercase font-medium rounded hover:bg-orange-soft focus:outline-none focus:bg-blue-500">Start project</button>
          </div>

          <div className=''></div>
        </div>
      </div>


      {/* Service Section */}

      <div>

      </div>

    </div>

  );
}

export default App;
