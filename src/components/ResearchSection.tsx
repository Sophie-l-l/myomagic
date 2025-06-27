
const ResearchSection = () => {
    const experts = [
      {
        name: "Valentina Mazzoli, PhD",
        title: "Assistant Professor, Department of Radiology, NYU Langone"
      },
      {
        name: "Patricia M. Johnson, PhD",
        title: "Assistant Professor, Department of Radiology, NYU Langone"
      },
      {
        name: "Mary-Lynn Y. Chu, MD",
        title: "Specialties: Pediatric Neurology, Neuromuscular Medicine, NYU Langone"
      },
      {
        name: "Matthew Ginsberg, MD",
        title: "Co-Director, Neurofibromatosis Clinic; Pediatric Neurologist, Akron Children's Hospital"
      }
    ];
  
    const insights = [
      {
        number: "1",
        title: "Radiologists felt that diagnosis for DMD is already well established via biopsy and genetics.",
        quote: "We typically perform biopsies only when genetic testing results are unclear or need additional evaluation. Most patients never undergo biopsy unless they're enrolled in clinical trials. Genetic testing has become much faster and easier to access nowadays, with free sponsored programs that don't require insurance authorization.",
        author: "Dr. Matthew Ginsberg"
      },
      {
        number: "2",
        title: "Greatest value seen in monitoring progression over time using MRI-based metrics: Fat fraction, Edema, Muscle volume / CSA",
        quote: "The most useful application of AI MRI image analysis for Duchenne is getting a very precise reproducible measure of fat fraction or edema that will be a good biomarker for clinical trials, helping reduce sample size and study duration.",
        author: "Dr. Matthew Ginsberg"
      },
      {
        number: "3",
        title: "MRI is preferred for non-invasive monitoring, especially in trials testing new treatments.",
        quote: "MRI is an excellent research tool that can monitor disease progression by tracking fat, inflammation, edema, and connective tissue changes. It could be performed every three to six months without sedation and would be valuable for assessing treatment effectiveness, especially if costs were reduced and patient access improved.",
        author: "Dr. Mary-Lynn Chu"
      },
      {
        number: "4",
        title: "Radiology workflow is open to AI tools",
        quote: "There's significant community effort to develop standardized imaging protocols across different institutions, allowing researchers to combine datasets and create larger, more comprehensive data collections. This standardization initiative demonstrates the field's readiness to embrace technological advances that can improve data analysis and research capabilities.",
        author: "Dr. Valentina Mazzoli"
      }
    ];
  
    return (
      <section className="py-20 bg-medical-gray" id="research">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Stats */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="text-6xl font-bold gradient-text mr-4">34</div>
              <div className="text-left">
                <p className="text-xl text-white font-semibold">Interviews have been</p>
                <p className="text-xl text-white font-semibold">conducted since the start of</p>
                <p className="text-xl text-white font-semibold">the program. Interviewees</p>
                <p className="text-xl text-white font-semibold">include, but are not limited to,</p>
                <p className="text-xl text-white font-semibold">Neurologists, Paediatricians,</p>
                <p className="text-xl text-white font-semibold">Radiologists.</p>
              </div>
            </div>
          </div>
  
          {/* Expert Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {experts.map((expert, index) => (
              <div key={index} className="bg-medical-dark rounded-lg p-6 card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-cyan to-medical-blue rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{expert.name.split(' ')[0][0]}{expert.name.split(' ')[1][0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-medical-cyan mb-2">{expert.name}</h3>
                <p className="text-gray-400 text-sm">{expert.title}</p>
              </div>
            ))}
          </div>
  
          {/* What We Learned */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">What We Learned</h2>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-medical-dark rounded-xl p-8 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{insight.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">{insight.title}</h3>
                    <blockquote className="text-gray-300 italic mb-4">"{insight.quote}"</blockquote>
                    <cite className="text-medical-cyan font-medium">- {insight.author}</cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ResearchSection;