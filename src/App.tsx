/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Facebook, Clock, Flame, Beef, Star, Users } from 'lucide-react';

const WHATSAPP_NUMBER = "556332142347";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.`;

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    aria-label="Fazer pedido pelo WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white fill-current">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  </a>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
          alt="Churrasco na brasa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#121212]"></div>
        {/* Fire glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#E53935]/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#E53935] flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(229,57,53,0.4)]">
              <Flame className="w-12 h-12 md:w-16 md:h-16 text-[#E53935]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight uppercase drop-shadow-lg">
            Tchê Gaúcho <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#E53935]">Espetos</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-6 font-display">
            O sabor do churrasco de verdade em Palmas
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Espetos selecionados, preparados na hora. Atendimento somente no jantar.
          </p>
          
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E53935] to-[#FF9800] text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-[0_0_20px_rgba(229,57,53,0.5)] transition-all uppercase tracking-wide"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Fazer Pedido no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-[#121212] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" 
                alt="Preparando churrasco" 
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1E1E1E] p-6 rounded-lg border border-[#E53935]/30 shadow-xl hidden md:block">
                <p className="text-[#FF9800] font-display text-4xl font-bold">Desde</p>
                <p className="text-white font-display text-5xl font-bold">2022</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Flame className="text-[#E53935] w-8 h-8" />
              <h2 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-wide">Nossa História</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E53935] to-[#FF9800] mb-8"></div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                A história do <strong className="text-white">Tchê Gaúcho Espetos – Palmas</strong> começou em julho de 2022, com um sonho, muita coragem e a vontade de fazer acontecer.
              </p>
              <p>
                Começamos do zero, enfrentando desafios, mas sempre acreditando no trabalho duro e na dedicação. Contamos com parceiros que confiaram no projeto e muitos seguem conosco até hoje.
              </p>
              <p>
                Cada etapa foi construída com esforço, união e gratidão. Hoje seguimos firmes oferecendo qualidade, sabor e uma experiência especial para cada cliente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const items = [
    { name: "Espeto de Carne", price: "R$ 12,00", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" },
    { name: "Espeto de Frango", price: "R$ 10,00", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop" },
    { name: "Espeto de Linguiça", price: "R$ 10,00", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=600&auto=format&fit=crop" },
    { name: "Medalhão de Frango", price: "R$ 14,00", img: "https://images.unsplash.com/photo-1599598425947-33002629ee98?q=80&w=600&auto=format&fit=crop" },
    { name: "Coraçãozinho", price: "R$ 12,00", img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop" },
    { name: "Queijo Coalho", price: "R$ 10,00", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section className="py-20 bg-[#181818] relative border-t border-[#222]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-wide mb-4">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E53935] to-[#FF9800] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Os melhores cortes, tempero no ponto e assados na brasa com perfeição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-[#333] hover:border-[#E53935]/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E1E1E] to-transparent h-24 z-20"></div>
              </div>
              <div className="p-6 relative z-30 -mt-8">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-display font-bold text-white">{item.name}</h3>
                  <span className="text-xl font-bold text-[#FF9800]">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E53935] hover:text-[#FF9800] font-bold text-lg uppercase tracking-wider transition-colors"
          >
            Ver cardápio completo no WhatsApp
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Beef className="w-10 h-10" />, title: "Carnes Selecionadas", desc: "Cortes de alta qualidade para o melhor sabor." },
    { icon: <Flame className="w-10 h-10" />, title: "Sabor Raiz", desc: "Churrasco feito na brasa, com tempero autêntico." },
    { icon: <Star className="w-10 h-10" />, title: "Tradição Gaúcha", desc: "O verdadeiro estilo do sul com um toque regional." },
    { icon: <Users className="w-10 h-10" />, title: "Ambiente Acolhedor", desc: "Perfeito para curtir com a família e amigos." },
  ];

  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-wide mb-4">Nossos Diferenciais</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E53935] to-[#FF9800] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#E53935]/50 transition-colors text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-[#222] rounded-full flex items-center justify-center text-[#E53935] group-hover:text-[#FF9800] group-hover:scale-110 transition-all mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold font-display uppercase mb-3 text-white">{feat.title}</h3>
              <p className="text-gray-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="py-20 bg-[#181818] border-t border-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-wide mb-4">Onde Estamos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E53935] to-[#FF9800] mb-8"></div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-[#E53935] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display uppercase text-white mb-1">Endereço</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Av. Palmas Brasil Sul, 22<br />
                    Plano Diretor Sul<br />
                    Palmas - TO
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-[#E53935] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display uppercase text-white mb-1">Horário</h4>
                  <p className="text-[#FF9800] font-medium">Funcionamento somente no jantar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-[#E53935] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display uppercase text-white mb-1">Contato</h4>
                  <p className="text-gray-400">(63) 3214-2347</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 h-[400px] rounded-2xl overflow-hidden border border-[#333] shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.837854655655!2d-48.3308333!3d-10.2019444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzA3LjAiUyA0OMKwMTknNTEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização Tchê Gaúcho Espetos"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8 border-t border-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-display uppercase text-white mb-2">
              Tchê Gaúcho <span className="text-[#E53935]">Espetos</span>
            </h2>
            <p className="text-gray-500">O sabor do churrasco de verdade em Palmas.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/tchegauchoespetospalmas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-gray-400 hover:text-[#E53935] hover:bg-[#222] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/61574635741917/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-gray-400 hover:text-[#E53935] hover:bg-[#222] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#222] pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Tchê Gaúcho Espetos - Palmas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] selection:bg-[#E53935] selection:text-white">
      <Hero />
      <About />
      <Menu />
      <Features />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
