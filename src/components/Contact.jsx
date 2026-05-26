export default function Contact() {
  return (
    <section id="appointment-section" className="mt-5 mb-5 pb-5 pt-5">
      <div className="container contacts-container">
        <div className="row text-center justify-content-sm-center no-gutters mb-5" data-aos="fade">
          <h2>Kapcsolat</h2>
        </div>
        <div className="row mt-5" data-aos="fade">
          <div className="col pt-5 pt-md-0">
            <form action="https://formspree.io/f/xdajwrop" method="POST" id="message-form">
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Vezetéknév" name="Vezetéknév" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Keresztnév" name="Keresztnév" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <input type="email" className="form-control" placeholder="E-mail" name="E-mail" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Tárgy" name="Tárgy" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <textarea className="form-control" name="Üzenet" placeholder="Üzenet szövege" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col mt-4 justify-content-center d-flex">
                  <button type="submit" className="send-button" name="messageSent">
                    Elküldöm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
