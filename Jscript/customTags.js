class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`All rights reserved @2021`
    }
}
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="left dflex">
        <a href="">
          <img src="images/amazon.png" alt="logo" class="logo" />
        </a>
        <div class="item">
          <p><i class="fa fa-map-marker"></i>hello</p>
        </div>
      </div>
      <!--<div class="brand">
        <a href="/main.html">Amazon</a>
      </div>-->
      <!--<div>
        <a href="/login.html">Log in</a>
        <a href="/signUpMod.html">Sign up</a>
        <a href="">Cart</a>
      </div>-->
      <div class="searchBox dflex">
        <div class="box">
          <div class="dflex">
            <button class="all" type="button">
              All
              <i class="fa fa-chevron-circle-down"></i>
            </button>
            <input type="text" />
            <button class="search" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="right dflex">
        <div class="item">
          <i class="fa fa-flag"></i>
          <i class="fa fa-chevron-circle-down"></i>
        </div>
        <div class="item">
          <span>
            <a href="">Login</a>
          </span>
          <span>
            <a href="">Signup</a>
          </span>
        </div>
        <div class="item">
          <a href="">Cart</a>
          <i class="fa fa-cart-plus"></i>
        </div>
      </div>
    `
    }
}
customElements.define('my-footer', MyFooter)
customElements.define('my-header', MyHeader)