import profilePic from "../assets/profile-photo.png";
import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
          <img
            src={profilePic}
            alt="Parm Johal"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* About Me Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Parm Johal</h3>
          <h4 className="text-xl text-gray-600 mb-4">Software Developer</h4>
          
          <div className="space-y-4 text-gray-700">
            <p>
            Welcome to my portfolio! I am a full stack developer with over 5 years of experience in developing web and software applications. 
            </p>
            
            <p>
            My expertise includes frontend development using HTML, CSS, and JavaScript, and backend development with Java and Python. 
            I excel in full stack development with frameworks such as Express, Django, jQuery, Angular, Bootstrap, and React, and have 
            several years of experience in API development and continuous integration. I hold a Bachelor of Science in Computer Science 
            from the University of Victoria and have taken a keen interest in adding Azure to my skillset. I am certified in Azure Data 
            Fundamentals Azure Fundamentals, and currently working on obtaining the Azure Developer Associate certification, making me a 
            valuable asset to any development team.
            </p>
            
            <p>
            Beyond my technical skills, I enjoy staying active with soccer, going to the gym, and have a deep passion for music, which 
            initially inspired my journey into computer science. I am eager to bring my diverse skill set and enthusiasm for technology 
            to new and exciting challenges!
            </p>
          </div>
          
          {/* Skills Tags */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Core Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "Java", "Python", "Tailwind CSS", "Docker", "Azure"].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-6 flex gap-4">
            <a 
              href={resume}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;