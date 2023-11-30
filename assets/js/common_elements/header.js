$(function () {
  const headerHtml = `

    <div class="header-container">
    <!-- FIRST NAV -->
    <div class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid col-10 px-0">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" aria-current="page" href="#">Personal</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">Agricultural</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" aria-current="page" href="#">Business</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">Internet Banking</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" aria-current="page" href="#">NACH Login</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">Sugar Portal</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" aria-current="page" href="#">Career</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">Tenders</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">Downloads</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">A-</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">A</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#">A+</a>
            </li>
            <li class="nav-item border-md-end">
              <a class="nav-link text-light" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">मराठी</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- SECOND NAV -->
    <nav class="navbar navbar-expand-lg bg-warning py-0">
      <div class="container-fluid col-10 px-0">
        <a class="" href="index.html" style="height: 70px">
          <img class="w-100 h-100" src="assets/images/pdcc-bank-logo.jpg" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="text-secondary fw-bold">Menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ABOUT US </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="about_us.html">INTRODUCTION</a>
                </li>
                <li><hr class="dropdown-divider my-0" /></li>
                <li>
                  <a class="dropdown-item" href="board_of_directors.html">BOARD OF DIRECTORS</a>
                </li>
                <li><hr class="dropdown-divider my-0" /></li>
                <li>
                  <a class="dropdown-item" href="#">MANAGEMENT</a>
                </li>
                <li><hr class="dropdown-divider my-0" /></li>
                <li>
                  <a class="dropdown-item" href="#">ANNUAL REPORT</a>
                </li>
                <li><hr class="dropdown-divider my-0" /></li>
                <li>
                  <a class="dropdown-item" href="mainalbum.html">PHOTO GALLERY</a>
                </li>
                <li><hr class="dropdown-divider my-0" /></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> LOAN </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Home Loan</a></li>
                <li>
                  <a class="dropdown-item" href="#">Car Loan</a>
                </li>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ACCOUNT </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Current Account</a></li>
                <li>
                  <a class="dropdown-item" href="#">Saving Account</a>
                </li>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> BANKING SERVICES </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Core Banking</a></li>
                <li>
                  <a class="dropdown-item" href="#">Net Banking</a>
                </li>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> DEPOSIT </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Current Deposit</a></li>
                <li>
                  <a class="dropdown-item" href="#">Deposits</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> CARDS </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> GRIEVANCE </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fs-6" href="contact.html" role="button"> CONTACT </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    
    `;

  $('header').html(headerHtml);
});
