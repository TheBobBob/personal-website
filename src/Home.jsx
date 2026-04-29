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
              I'm a rising junior majoring in computer science and biochemistry at the University of Washington. 
              Previously, I was a software engineering research assistant at Harvard Medical School and a member of kinetic modeling subteam at UW iGEM.
              Currently, I am an undergraduate researcher at the Noble Lab in the Department of Genome Sciences at the University of Washington working on 
              training Casanovo, a de novo transformer peptide sequencer, on timsTOF data that is increasingly used in immunopeptidomics. I am also working 
              on integrating DIA functionality into Casanovo. I am also a teaching assistant in the Allen School for CSE390Z (an accompanying seminar for the
              introductory discrete mathematics course for computer science majors). I will be presenting at ASMS 2026!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
