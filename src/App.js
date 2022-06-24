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
      <div className='w-full mt-40 mb-40'>
        <div className='container mx-auto text-center'>
          <h4 className='font-bold text-4xl text-orange-main'>Our Service Feature</h4>
          <p className='w-25 text-sm mt-5 mb-20 text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        
          <div className='flex flex-row'>
            {
              [
                {title: 'Web Development', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {title: 'Web Development', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {title: 'Web Development', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
              ].map(service => (
                <div className='flex-1 border-2 px-5 py-12 m-4 border-r-8 rounded-xl border-r-orange-main'>
                  <div className='text-center'>
                    <div className='text-center flex flex-col items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div className='mt-7'>
                      <h4 className='text-orange-main uppercase font-bold mb-2'>{service.title}</h4>
                      <p className='text-slate-700 mt-4'>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
