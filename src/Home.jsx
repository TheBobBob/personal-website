import picture from './assets/picture.svg';

function Home() {
  return (
    <>
      {/* Name Banner */}
      <div className="w-full bg-pink-300 text-center py-16"> <h1 className="text-7xl font-bold text-black">Bhavyahshree Navaneetha Krishnan</h1> </div>

      {/* Intro Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-25">
        <div>
          <img
            src={picture}
            alt="Picture"
            className="h-auto max-w-md mx-auto"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            Hi! My name is Bhavyahshree Navaneetha Krishnan, but I go by Bhavya. 
              I'm a rising sophomore majoring in computer science and mathematics with a minor in linguistics at the University of Washington. 
              Previously, I was a software engineering research assistant at Harvard Medical School and a member of kinetic modeling subteam at UW iGEM.
              Currently, I am an assistant researcher at the UW Department of Bioengineering, working on creating RAG systems for analyzing Biomodels 
              and creating machine learning models for analyzing time series data! I am also working towards my 
              AWS Certified Cloud Practitioner certification.
              In my free time, I enjoy baking, reading, and writing (the link to my blog is below)!
              <br></br>
              <br></br> 
              I am looking for internships/research positions in bioinformatics and natural language processing, as well as opportunities to gain skills in SQL, 
              JavaScript, and applied machine learning. Feel free to contact me about anything!
            {/* Add your full intro text here */}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
