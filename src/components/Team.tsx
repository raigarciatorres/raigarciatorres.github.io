
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Star } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. Maria Silva",
      role: "Neuropsicopedagoga",
      specialties: ["TDAH", "Dislexia", "Avaliação Cognitiva"],
      experience: "12 anos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. João Santos",
      role: "Psicopedagogo",
      specialties: ["Discalculia", "Reabilitação", "Estimulação Precoce"],
      experience: "8 anos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dra. Ana Costa",
      role: "Neuropsicóloga",
      specialties: ["Desenvolvimento Infantil", "TEA", "Orientação Familiar"],
      experience: "15 anos",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="equipe" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Nossa
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Equipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais especializados e experientes, dedicados a oferecer 
            o melhor atendimento neuropsicopedagógico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Star className="text-white w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <GraduationCap className="text-blue-600 w-5 h-5" />
                  <span className="text-blue-600 font-semibold">{member.role}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>Experiência:</strong> {member.experience}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">Especialidades:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
