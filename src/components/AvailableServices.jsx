import { serviceImg1, serviceImg2, serviceImg3 } from "../utils";

const AvailableServices = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center bg-zinc overflow-hidden'>
      <div className="common-padding">
        <div className="flex flex-col items-center justify-center mt-44">
          <h1 className="hero-title pb-14">
            Vamos explorar algumas tecnologias?
          </h1>
          <h4 className="font-thin justify-center items-center">
            Escolha uma tecnologia da roleta para aprender um pouquinho
          </h4>
          <div className="banner relative w-full max-h-screen overflow-hidden">
            <div className="slider relative" style={{ '--quantity': '3' }}>
              <div className="item" style={{ '--position': '1' }}>
                <a
                  href="https://aws.amazon.com/pt/what-is-aws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-lg overflow-hidden cursor-pointer"
                >
                  <img src={serviceImg1} alt="Plataforma 1" className="w-full h-full object-cover" />
                </a>
              </div>
              <div className="item" style={{ '--position': '2' }}>
                <a
                  href="https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-azure/?&ef_id=_k_Cj0KCQjwsuSzBhCLARIsAIcdLm6_vPg0AE6u0M2MIDQSAJG6FwMIPngsmTFSULZwDRUv-KR1FWgs9twaAiMgEALw_wcB_k_&OCID=AIDcmmzmnb0182_SEM__k_Cj0KCQjwsuSzBhCLARIsAIcdLm6_vPg0AE6u0M2MIDQSAJG6FwMIPngsmTFSULZwDRUv-KR1FWgs9twaAiMgEALw_wcB_k_&gad_source=1&gclid=Cj0KCQjwsuSzBhCLARIsAIcdLm6_vPg0AE6u0M2MIDQSAJG6FwMIPngsmTFSULZwDRUv-KR1FWgs9twaAiMgEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-lg overflow-hidden cursor-pointer"
                >
                  <img src={serviceImg2} alt="Plataforma 2" className="w-full h-full object-cover" />
                </a>
              </div>
              <div className="item" style={{ '--position': '3' }}>
                <a
                  href="https://cloud.google.com/why-google-cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-lg overflow-hidden cursor-pointer"
                >
                  <img src={serviceImg3} alt="Plataforma 3" className="w-full h-full object-cover" />
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-full h-3/4 bg-black opacity-70"></div> {/* Backdrop escuro */}
              <div className="w-full h-75vh bg-cover bg-center relative z-10">
                <img src="./../assets/images/model.png" alt="Model" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvailableServices;
