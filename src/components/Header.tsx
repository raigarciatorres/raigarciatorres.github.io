
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Exponencialmente
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <Link to="/agendamento">
            <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
              Agendar Consulta
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            {menuItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/agendamento" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-500">
                Agendar Consulta
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
