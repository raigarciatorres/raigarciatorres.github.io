
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', telefone: '', email: '', assunto: '', mensagem: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123\nCentro - São Paulo, SP",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3456-7890\n(11) 98765-4321",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@exponencialmente.com.br\natendimento@exponencialmente.com.br",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Horários",
      info: "Segunda à Sexta: 8h às 18h\nSábado: 8h às 12h",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Entre em
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você ou sua família. Agende uma consulta 
            ou tire suas dúvidas conosco.
          </p>
          <div className="mt-6">
            <Link to="/agendamento">
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 py-4">
                Agendar Consulta Online
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-').replace('600', '100')} rounded-lg flex items-center justify-center`}>
                          <info.icon className={`${info.color} w-6 h-6`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 text-sm whitespace-pre-line">
                            {info.info}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Mapa da localização</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Nome *</label>
                    <Input 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo" 
                      className="border-gray-200" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Telefone *</label>
                    <Input 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999" 
                      className="border-gray-200" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">E-mail *</label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com" 
                    className="border-gray-200" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Assunto</label>
                  <Input 
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem" 
                    className="border-gray-200" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Mensagem *</label>
                  <Textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva sua necessidade ou dúvida..." 
                    className="border-gray-200 min-h-[120px]" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg py-6"
                >
                  Enviar Mensagem
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
