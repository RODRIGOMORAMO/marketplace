function Footer() {
  return (
    <footer className="bg-light text-muted pt-4 mt-5 border-top">
      <div className="container text-md-start">
        <div className="row">

          {/* Sobre el proyecto */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Sobre el proyecto</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0d6efd', height: '2px' }} />
            <p>
              Marketplace es un proyecto académico para la Certificación de Desarrolladores Full Stack. Los productos mostrados son simulados.
            </p>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Contacto</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0d6efd', height: '2px' }} />
            <p><i className="bi bi-envelope me-2"></i> contacto@marketplace.cl</p>
            <p><i className="bi bi-phone me-2"></i> +56 9 1234 5678</p>
            <p><i className="bi bi-geo-alt me-2"></i> Santiago, Chile</p>
          </div>

          {/* Desarrolladores Web */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Desarrolladores Web</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0d6efd', height: '2px' }} />
            <p>· Barbara Geraldini<br />· Jesus Sierra <br />· Rodrigo Mora <br /> © 2025 Desarrolladores Full Stack</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;


