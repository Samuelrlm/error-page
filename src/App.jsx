import image from "./assets/monster-404-error-animate.svg"

function App() {

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full flex justify-center flex-col pl-4">
        <h1 className="">Opss....</h1>
        <h2 className="">Page not found</h2>
        <p className="">
          A pagina que você procura não existe,
          ou não foi encontrada, volte para a pagina principal
        </p>
        <button className="">Voltar</button>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" />
      </div>
    </div>  
  )
}

export default App
