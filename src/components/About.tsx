
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Famílias Atendidas",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      color: "text-green-600"
    },
    {
      icon: Clock,
      number: "2000+",
      label: "Horas de Atendimento",
      color: "text-purple-600"
    },
    {
      icon: Target,
      number: "95%",
      label: "Taxa de Sucesso",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Sobre a
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Exponencialmente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa clínica nasceu com o propósito de potencializar o desenvolvimento humano 
            através de práticas baseadas em evidências científicas e uma abordagem integral 
            que considera as necessidades únicas de cada pessoa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Ambiente da clínica"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Nossa Missão
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Promover o desenvolvimento exponencial das habilidades cognitivas, 
              emocionais e comportamentais, oferecendo suporte especializado para 
              superar desafios de aprendizagem e potencializar capacidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Avaliação neuropsicopedagógica completa</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Intervenções personalizadas e baseadas em evidências</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Acompanhamento familiar e escolar integrado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`${stat.color} w-8 h-8`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
