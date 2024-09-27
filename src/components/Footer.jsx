
const Footer = () => {
  return (
    <div className='bg-green-950 text-white'>
      <footer className='footer  max-w-7xl lg:flex lg:justify-between gap-8 p-10 xl:mx-32'>
        <div className='flex justify-between w-full lg:w-2/3'>
          {/* services */}
          <nav className='flex flex-col'>
            <h6 className='footer-title'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          {/* company */}
          <nav className='flex flex-col'>
            <h6 className='footer-title'>Company</h6>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
          </nav>
          {/* legal */}
          <nav className='flex flex-col'>
            <h6 className='footer-title'>Legal</h6>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>
        {/* newsletter */}

        <div className='w-full lg:w-1/3 flex justify-center lg:-mt-10'>
          <form>
            <h6 className='footer-title  text-center mt-2 lg:mt-8 -mb-6'>Newsletter</h6>
            <fieldset className='form-control w-80'>
              <label className='label'>
                <span className='label-text'>Enter your email address</span>
              </label>
              <div className='join'>
                <input
                  type='text'
                  placeholder='username@site.com'
                  className='input input-bordered join-item'
                />
                <button className='btn btn-primary join-item'>Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
}
export default Footer