# 🦸‍♂️ Marvel Blog - Angular

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SSR](https://img.shields.io/badge/SSR-Enabled-green?style=for-the-badge)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**Um blog moderno sobre Marvel desenvolvido com as mais recentes tecnologias Angular**

[� **Ver Demo**](https://angularblog.netlify.app/) • [📱 Mobile Preview](https://angularblog.netlify.app/) • [⭐ Dar Star](../../)

</div>

---

## 🎯 **Sobre o Projeto**

Este é um projeto de blog focado em conteúdo Marvel, desenvolvido como demonstração de habilidades em desenvolvimento frontend moderno. O projeto utiliza Angular 20 com Server-Side Rendering (SSR) para otimização de performance e SEO.

### ✨ **Features Implementadas**

- ✅ **Design Responsivo** - Adaptável para todos os dispositivos
- ✅ **Server-Side Rendering (SSR)** - Melhor performance e SEO
- ✅ **Standalone Components** - Arquitetura moderna do Angular
- ✅ **Cards Dinâmicos** - Componentes reutilizáveis
- ✅ **TypeScript** - Tipagem forte e desenvolvimento robusto
- ✅ **Prettier** - Formatação consistente de código

## 🛠️ **Tecnologias Utilizadas**

| Frontend | Backend | Deploy | Tools |
|----------|---------|--------|-------|
| Angular 20.2.0 | Express.js | Netlify | TypeScript |
| RxJS | Node.js | CI/CD | Prettier |
| CSS3 | SSR | - | Angular CLI |

## 🚀 **Como Executar**

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Demetrio023/AngularBlog.git

# Entrar no diretório
cd AngularBlog

# Instalar dependências
npm install

# Executar em desenvolvimento
npm start
```

O projeto estará disponível em `http://localhost:4200/`

### Scripts Disponíveis

```bash
npm start          # Servidor de desenvolvimento
npm run build      # Build para produção
npm run watch      # Build em modo watch
npm test           # Executar testes unitários
```

## 📁 **Estrutura do Projeto**

```
src/
├── app/
│   ├── components/
│   │   ├── big-card/      # Card principal para artigos em destaque
│   │   ├── menu-bar/      # Menu de navegação
│   │   ├── smau-card/     # Cards secundários
│   │   └── title/         # Componente de título
│   ├── app.ts            # Componente raiz
│   └── app.routes.ts     # Configuração de rotas
├── assets/               # Recursos estáticos
└── styles.css           # Estilos globais
```

## 🎨 **Design System**

- **Paleta de Cores**: Dark theme com destaque em vermelho Marvel
- **Typography**: Fonte moderna e legível
- **Layout**: Grid responsivo com cards
- **Componentes**: Modulares e reutilizáveis

## 📈 **Performance**

- ⚡ **Lighthouse Score**: 95+ (Performance)
- 🔍 **SEO Optimized**: Meta tags e estrutura semântica
- 📱 **Mobile First**: Design responsivo
- 🚀 **Fast Loading**: SSR implementado

## 🌟 **Demonstrações Técnicas**

Este projeto demonstra conhecimento em:

- **Angular Moderno**: Versão 20 com standalone components
- **Arquitetura Limpa**: Separação clara de responsabilidades
- **Performance**: SSR e otimizações
- **Boas Práticas**: TypeScript, linting, formatação
- **Deploy**: Configuração profissional no Netlify

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 **Contato**

**Desenvolvido por:** Demetrio  
**GitHub:** [@Demetrio023](https://github.com/Demetrio023)  
**Deploy:** [angularblog.netlify.app](https://angularblog.netlify.app/)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
