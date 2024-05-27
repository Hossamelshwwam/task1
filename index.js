const menu = document.querySelector(".menu");
const link = document.querySelector(".navbar .links ul");

menu.addEventListener("click", () => {
  link.classList.toggle("hidden");
});

const content = document.querySelector(".content");

function checkWindowWidth() {
  console.log(window.innerWidth);
  if (window.innerWidth < 556) {
    console.log(window.innerWidth);
    // content.innerHTML = ``;
    console.log("mobile");
  } else {
    content.innerHTML = `
    <!-- Start Hero -->
    <div class="home">
      <div class="titles">
        <div class="main-title">
          combine
          <span class="special-word">fine</span>
          images
        </div>
        <div class="sec-title">to represent a product</div>
      </div>
      <div class="gallery">
        <div class="gallery-1"></div>
        <div class="gallery-2"></div>
        <div class="gallery-3"></div>
        <div class="gallery-4"></div>
        <div class="gallery-5"></div>
        <div class="gallery-6"></div>
        <div class="gallery-7"></div>
        <div class="gallery-8">
          <button>Learn more</button>
        </div>
      </div>
    </div>
    <!-- End Hero -->
    <!-- Start pricing -->
    <div class="pricing">
      <div class="container">
        <div class="pricing-titles">
          <div class="main-title">Affordable pricing</div>
          <div class="sub-title">
            Bill me <span class="special">monthly</span
            ><span class="dot"></span> yearly
          </div>
        </div>
        <div class="pricing-plans">
          <div class="card">
            <div>
              <div class="title">
                <p>like a homeless</p>
              </div>
              <div class="price">Free<span>/ forever</span></div>
              <div class="features">
                <div class="feature">
                  <div class="icon-container">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div class="feature">
                  <div class="icon-container">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div class="feature">
                  <div class="icon-container">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
              </div>
            </div>
            <button>try it free</button>
          </div>
          <div class="card shadow">
            <div>
              <div class="title">
                <p><i class="fa-solid fa-user"></i> individual</p>
                <p class="label">best!</p>
              </div>
              <div class="price">Free<span>/ forever</span></div>
              <div class="features">
                <div class="feature">
                  <div class="icon-container gold">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div class="feature">
                  <div class="icon-container gold">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div class="feature">
                  <div class="icon-container gold">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
                <div class="feature">
                  <div class="icon-container gold">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>themed into 3 different styles</p>
                </div>
                <div class="feature">
                  <div class="icon-container gold">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>will help to learn figm</p>
                </div>
              </div>
            </div>
            <button class="best-seller">regular lincense</button>
          </div>
          <div class="card">
            <div>
              <div class="title">
                <p><i class="fa-solid fa-users"></i> corporate</p>
              </div>
              <div class="price">Free<span>/ forever</span></div>
              <div class="features">
                <div class="feature">
                  <div class="icon-container green">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div class="feature">
                  <div class="icon-container green">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div class="feature">
                  <div class="icon-container green">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
                <div class="feature">
                  <div class="icon-container green">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <p>themed into 3 different styles</p>
                </div>
              </div>
            </div>
            <button>extended lincense</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End pricing -->
    `;
    console.log(window.innerWidth);
    console.log("not mobile");
  }
}

window.addEventListener("resize", checkWindowWidth);

window.addEventListener("DOMContentLoaded", checkWindowWidth);
