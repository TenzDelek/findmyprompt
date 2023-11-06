import Feed from "@components/Feed"

const Home = () => {
  return (
   <section className=" w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className=" max-md:hidden"/>
      <span className=" orange_gradient text-center"> Creative-Powered Prompts</span>
    </h1>
    <p  className=" desc text-center"> 
      <span className="blue_gradient font-bold">FINDMYPROMPT</span> is an open-source prompting tool
      for modern world to discover, create and Share 
      creative prompts
    </p>

    <Feed/>
    </section>
  )
}

export default Home