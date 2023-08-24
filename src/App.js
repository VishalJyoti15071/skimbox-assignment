import './App.css'

const App = () => (
  <div className="container">
    <div className="heading-container">
      <hr className="hr-line" />
      <h1 className="main-heading">Bundle & Save</h1>
      <hr className="hr-line" />
    </div>
    <form className="form-container">
      <div className="input-container1">
        <input type="radio" name="item" className="first-input-container" />
        <div className="item-container">
          <div className="pair-container">
            <p className="pair-para">1 Pair</p>
            <p className="pair-para">DDK 195.00</p>
          </div>
          <p className="pair-para5">50% off</p>
        </div>
      </div>
      <div className="input-container2">
        <div className="input-card-container1">
          <input
            type="radio"
            name="item"
            className="first-input-container"
            defaultChecked
          />
          <div className="item-container1">
            <div className="pair-container1">
              <p className="pair-para1">2 Pair</p>
              <p className="pair-para2">Most Popular</p>
            </div>
            <div className="pair-container1">
              <p className="pair-para3">DKK 345.00</p>
              <p className="pair-para4">DKK 195.00</p>
              <p className="pair-para5">40% off</p>
            </div>
          </div>
        </div>
        <div className="drop-down-container">
          <div className="title-container">
            <p className="size-para">Size</p>
            <p className="size-para">Colour</p>
          </div>
          <div className="drop-container">
            <p className="size-para1">#1</p>
            <select className="select-button">
              <option selected>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select className="select-button">
              <option selected>Colour White</option>
              <option>Colour Red</option>
              <option>Colour Blue</option>
              <option>Colour Black</option>
            </select>
          </div>
          <div className="drop-container2">
            <p className="size-para1">#2</p>
            <select className="select-button">
              <option selected>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select className="select-button">
              <option selected>Colour White</option>
              <option>Colour Red</option>
              <option>Colour Blue</option>
              <option>Colour Black</option>
            </select>
          </div>
        </div>
      </div>
      <div className="input-container1">
        <input type="radio" name="item" className="first-input-container" />
        <div className="item-container">
          <div className="pair-container">
            <p className="pair-para">3 Pair</p>
            <p className="pair-para">DKK 528.00</p>
          </div>
          <p className="pair-para5">60% off</p>
        </div>
      </div>
      <div className="total-container">
        <p className="free-para">Free 2 Day Shipping</p>
        <p className="total-para">Total : DKK 360.00</p>
      </div>
      <button className="button" type="submit">
        + Add to Cart
      </button>
    </form>
    <p className="powered-para">
      <span className="c-letter">C</span> Powered by Pumper
    </p>
  </div>
)

export default App
