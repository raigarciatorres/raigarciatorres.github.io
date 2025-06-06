
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h3 className="text-xl font-bold">Exponencialmente</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desenvolvendo potenciais e transformando vidas através da neuropsicopedagogia.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Feito com amor e dedicação</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#equipe" className="text-gray-300 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Avaliação Neuropsicopedagógica</li>
              <li className="text-gray-300">Dificuldades de Aprendizagem</li>
              <li className="text-gray-300">Desenvolvimento Socioemocional</li>
              <li className="text-gray-300">Orientação Familiar</li>
              <li className="text-gray-300">Estimulação Precoce</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <span className="text-gray-300">Rua das Flores, 123<br />Centro - São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">contato@exponencialmente.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Clínica Exponencialmente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
