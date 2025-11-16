import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.853.038 1.125.049 3.297.049s2.444-.01 3.297-.049c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.718-.891.923-1.417.197-.509.332-1.09.372-1.942.038-.853.049-1.125.049-3.297s-.01-2.444-.049-3.297c-.04-.852-.175-1.433-.372-1.942a3.916 3.916 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.486.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zM8 4.884c-1.799 0-3.256 1.458-3.256 3.256s1.457 3.256 3.256 3.256c1.799 0 3.256-1.458 3.256-3.256S9.799 4.884 8 4.884zm0 5.448c-.994 0-1.803-.81-1.803-1.803s.81-1.803 1.803-1.803 1.803.81 1.803 1.803-.81 1.803-1.803 1.803z"/>
    </svg>
);


export const Footer: React.FC = () => {
  return (
    <footer className="bg-earthy-brown text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="mb-4">
            <p className="font-semibold text-lg">Siga-nos nas redes sociais!</p>
            <p className="text-md opacity-90">@gsmiprojetos</p>
            <div className="flex justify-center gap-6 mt-3">
                <a href="https://www.instagram.com/gsmiprojetos?igsh=cnM5eGx3aWNjcXVr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity"><InstagramIcon /></a>
            </div>
        </div>
        <div className="border-t border-white/20 pt-4 mt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Projeto de Gestão Ambiental. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-2 opacity-75">
              Desenvolvido para a comunidade de Igarassu.
            </p>
        </div>
      </div>
    </footer>
  );
};