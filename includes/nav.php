<main>
    <style>
      #loading{
    position:fixed;
    top:0;
    left:0;
    z-index:10000;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9)
  
  }
    </style>
    <a class="navbar-brand" href="#"></a>
    <nav class="navbar navbar-expand-lg bg-body-primary bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="./imgs/logohdigreenrbg.svg"
            alt="Logo"
            width="80"
            height="80"
            class="d-inline-block align-text-center"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item ">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Cotizador
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Guardadas
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Pólizas
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Sitio Web
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="loading" class="d-flex justify-content-center align-items-center invisible">
      <div class="text-center">
          <img src="./imgs/logohdigreenrbg.png" alt="logo">
          <br></br>
          <div class='d-flex align-items-center container'>
            <div>
              <h5 class='text-light'>Estamos validando la información</h5>
            </div>
          </div>
          <div class="spinner-border text-light" >
          <span class="visually-hidden">Loading...</span>
          </div>
      </div>
    </div>  
    
    <h1 class="text-primary text-center p-4">Cotiza tu seguro de auto</h1>
    <div class="container justify-content-between mt-5">
      <div class="row">
        <div class="col text-center ">
          <button class="btn btn-primary btnBackground shadow">
            <span class="material-symbols-outlined">person</span>
          </button>
        </div>
        <div class="col text-center text-white">
          <button class="btn btn-secondary btnBackground shadow" id="carProgressIcon" disabled>
            <span class="material-symbols-outlined">directions_car</span>
          </button>
        </div>
        <div class="col text-center">
          <button class="btn btn-secondary btnBackground shadow" disabled>
            <span class="material-symbols-outlined">badge</span>
          </button>
        </div>
        <div class="col text-center">
          <button class="btn btn-secondary btnBackground shadow" disabled>
            <span class="material-symbols-outlined">description</span>
          </button>
        </div>
        <div class="col text-center">
          <button class="btn btn-secondary btnBackground shadow" disabled>
            <span class="material-symbols-outlined">payments</span>
          </button>
        </div>
      </div>
    </div>
    
   
    <div class="container text-center mt-5">
      <h5 class="text-secondary text-center mb-5" id="formDescription">
        Para comenzar compártenos tus datos, estos son necesarios para poder
        generar tu cotización y contratación si así lo deseas.
      </h5>
    </div>

    <div id="vehicleButton" class="text-center"></div>
    
    <div class="container mt-5">
      <form id="contactForm" action='save_task.php' method="POST">
        
      </form>
    </div>

   
</main>  

<script src="./js/sweetAlert.js"></script>