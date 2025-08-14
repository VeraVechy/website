import React from 'react';

function Form() {
  return (
    <>
     <form action="https://formsubmit.co/vechygraphix@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/contact" />
            
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" name='name' className="form-control" placeholder='Name' required />
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="email" name='email' className="form-control" placeholder='Email' required />
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" className="form-control" name='phone' placeholder='Phone (Optional)' />
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="text" className="form-control" name="subject" placeholder='Subject' required />
              </div>
            </div>

            <textarea name="message" className="form-control mt-3" placeholder='Enter your message here' cols="30" rows="10" required></textarea>
            
            <div className="mt-3">
              <button type="submit" className="btn btn-danger">Submit</button>
            </div>
            </form>


    </>
  )
}

export default Form