
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Agendamento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao site
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Agendar
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Consulta</span>
            </h1>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo para agendar sua avaliação neuropsicopedagógica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <User className="mr-2 text-blue-600" />
                  Dados Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Nome Completo *</label>
                    <Input placeholder="Digite seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Data de Nascimento *</label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Telefone *</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">E-mail *</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Endereço</label>
                  <Input placeholder="Rua, número, bairro, cidade" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 text-green-600" />
                  Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Tipo de Serviço *</label>
                  <select className="w-full p-2 border border-gray-200 rounded-md">
                    <option value="">Selecione um serviço</option>
                    <option value="avaliacao">Avaliação Neuropsicopedagógica</option>
                    <option value="intervencao">Intervenção em Dificuldades de Aprendizagem</option>
                    <option value="socioemocional">Desenvolvimento Socioemocional</option>
                    <option value="orientacao">Orientação Familiar</option>
                    <option value="reabilitacao">Reabilitação Cognitiva</option>
                    <option value="estimulacao">Estimulação Precoce</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Data Preferida *</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Horário Preferido *</label>
                    <select className="w-full p-2 border border-gray-200 rounded-md">
                      <option value="">Selecione um horário</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Observações</label>
                  <Textarea placeholder="Descreva brevemente o motivo da consulta ou observações importantes..." />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>Responderemos em até 24 horas para confirmar o agendamento</span>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 px-8">
                  Solicitar Agendamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
