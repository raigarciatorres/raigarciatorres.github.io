
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Desenvolvendo
                <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  Potenciais
                </span>
                Exponencialmente
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialistas em neuropsicopedagogia dedicados ao desenvolvimento 
                cognitivo, emocional e comportamental de crianças, adolescentes e adultos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/agendamento">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Agendar Avaliação
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2 border-blue-200 hover:bg-blue-50"
                onClick={scrollToServices}
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Neurociência</div>
                  <div className="text-sm text-gray-600">Aplicada</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Cuidado</div>
                  <div className="text-sm text-gray-600">Humanizado</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profissional atendendo criança"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
