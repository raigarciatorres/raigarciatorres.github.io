
import { BookOpen, Brain, Heart, Users, Puzzle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Avaliação Neuropsicopedagógica",
      description: "Diagnóstico detalhado das funções cognitivas e processos de aprendizagem para identificar potenciais e dificuldades.",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Intervenção em Dificuldades de Aprendizagem",
      description: "Tratamento especializado para dislexia, discalculia, TDAH e outras condições que afetam o aprendizado.",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Desenvolvimento Socioemocional",
      description: "Fortalecimento das habilidades emocionais, autoestima e competências sociais para um desenvolvimento integral.",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Orientação Familiar",
      description: "Suporte e orientação para famílias sobre como apoiar o desenvolvimento neuropsicopedagógico em casa.",
      color: "bg-orange-500"
    },
    {
      icon: Puzzle,
      title: "Reabilitação Cognitiva",
      description: "Exercícios e atividades específicas para estimular e fortalecer funções cognitivas como memória, atenção e linguagem.",
      color: "bg-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Estimulação Precoce",
      description: "Programas especializados para bebês e crianças pequenas visando otimizar o desenvolvimento neurológico.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Nossos
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços neuropsicopedagógicos 
            personalizados para atender às necessidades específicas de cada indivíduo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
