import type { Module } from './types';

export const contractsModule: Module = {
  id: 'contracts',
  title: 'Módulo de Gestão de Contratos',
  icon: '📄',
  tree: [
    {
      id: 'ct-1', label: '1. Visão Geral', children: [
        { id: 'ct-1-1', label: '1.1 Objetivo', isLeaf: true },
        { id: 'ct-1-2', label: '1.2 Como Começar', isLeaf: true },
      ]
    },
    {
      id: 'ct-2', label: '2. Gestão de Contratos', children: [
        { id: 'ct-2-1', label: '2.1 Planeamento de Aquisições', isLeaf: true },
        { id: 'ct-2-2', label: '2.2 Registo de Fornecedores', isLeaf: true },
        {
          id: 'ct-2-3', label: '2.3 Registo do Contrato', children: [
            { id: 'ct-2-3-1', label: '2.3.1 Ver Contrato de Integração', isLeaf: true },
            { id: 'ct-2-3-2', label: '2.3.2 Detalhes da Execução do Contrato', isLeaf: true },
          ]
        },
      ]
    },
  ],
  sections: {
    'ct-1': {
      title: '1. Visão Geral',
      content: `
        <h2>1. Visão Geral</h2>
        <p>O Módulo de Gestão de Contratos do SIMple Project é uma solução abrangente para a gestão do ciclo de vida dos contratos celebrados pela organização, desde o planeamento de aquisições até ao acompanhamento da execução financeira dos contratos.</p>
        <p>Este módulo permite às entidades municipais gerir de forma eficiente e transparente todos os contratos, garantindo conformidade com a legislação de contratação pública vigente em Cabo Verde e promovendo a boa governação financeira.</p>
        <p>O Módulo de Gestão de Contratos integra-se com os restantes módulos do SIMple Project, nomeadamente com o módulo financeiro e o módulo de recursos humanos, assegurando uma visão holística da atividade contratual da organização.</p>
      `
    },
    'ct-1-1': {
      title: '1.1 Objetivo',
      parent: '1. Visão Geral',
      content: `
        <h2>1.1 Objetivo</h2>
        <p>O principal objetivo do Módulo de Gestão de Contratos é proporcionar às entidades municipais uma ferramenta completa e integrada para a gestão de todos os aspetos relacionados com a contratação pública e a gestão de fornecedores.</p>
        <p>De forma específica, este módulo visa:</p>
        <ul>
          <li>Centralizar o planeamento e controlo das aquisições de bens e serviços;</li>
          <li>Manter um registo atualizado e completo de todos os fornecedores da organização;</li>
          <li>Gerir o ciclo de vida completo dos contratos, desde a celebração até ao encerramento;</li>
          <li>Monitorizar a execução financeira dos contratos em tempo real;</li>
          <li>Garantir a conformidade com os prazos e condições contratuais;</li>
          <li>Facilitar a gestão documental associada aos processos de contratação;</li>
          <li>Promover a transparência e a rastreabilidade de todos os processos de aquisição;</li>
          <li>Reduzir os riscos associados à gestão contratual e ao incumprimento de obrigações legais.</li>
        </ul>
        <p>O módulo foi desenhado para responder às necessidades específicas das autarquias cabo-verdianas, incorporando os requisitos legais e as melhores práticas de contratação pública.</p>
      `
    },
    'ct-1-2': {
      title: '1.2 Como Começar',
      parent: '1. Visão Geral',
      content: `
        <h2>1.2 Como Começar</h2>
        <p>Para aceder ao Módulo de Gestão de Contratos do SIMple Project, siga os seguintes passos:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Abra o seu navegador de internet e aceda ao endereço da plataforma SIMple fornecido pelo seu administrador.</span></li>
          <li><span class="step-badge">2</span><span>Autentique-se com as suas credenciais de acesso (<strong>ID de Funcionário</strong> e <strong>Senha</strong>).</span></li>
          <li><span class="step-badge">3</span><span>No menu lateral, localize e expanda a secção <strong>Gestão de Contratos</strong>.</span></li>
          <li><span class="step-badge">4</span><span>Selecione a funcionalidade pretendida clicando no item correspondente da árvore de navegação.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> O acesso às diferentes funcionalidades do módulo está condicionado aos perfis de acesso atribuídos ao seu utilizador. Utilizadores com perfil de "Gestor de Contratos" têm acesso completo ao módulo, enquanto utilizadores com perfil de "Consultor" têm acesso apenas em modo de leitura. Contacte o administrador do sistema caso necessite de permissões adicionais.</div>
        <div class="figure-placeholder">Figura 1-1: Menu de Navegação do Módulo de Gestão de Contratos</div>
      `
    },
    'ct-2': {
      title: '2. Gestão de Contratos',
      content: `
        <h2>2. Gestão de Contratos</h2>
        <p>A secção principal de Gestão de Contratos engloba todas as funcionalidades necessárias para a gestão integral do ciclo contratual da organização, desde o planeamento das aquisições até ao acompanhamento da execução dos contratos celebrados.</p>
        <p>As funcionalidades disponíveis são:</p>
        <ul>
          <li><strong>2.1 Planeamento de Aquisições</strong> — Registo e controlo do plano anual de aquisições;</li>
          <li><strong>2.2 Registo de Fornecedores</strong> — Gestão da base de dados de fornecedores;</li>
          <li><strong>2.3 Registo do Contrato</strong> — Gestão completa dos contratos e acompanhamento da execução.</li>
        </ul>
      `
    },
    'ct-2-1': {
      title: '2.1 Planeamento de Aquisições',
      parent: '2. Gestão de Contratos',
      content: `
        <h2>2.1 Planeamento de Aquisições</h2>
        <p>O ecrã de Planeamento de Aquisições permite à organização planear e controlar as suas necessidades de aquisição de bens, serviços e empreitadas para cada ano fiscal. Este planeamento é essencial para garantir o cumprimento dos requisitos legais de contratação pública e para uma adequada gestão orçamental.</p>
        <div class="figure-placeholder">Figura 3-1: Ecrã de Lista de Planeamento de Aquisições</div>
        <h3>Lista de Planeamento</h3>
        <p>O ecrã principal apresenta uma lista com todos os planos de aquisição registados. Estão disponíveis filtros de pesquisa por:</p>
        <ul>
          <li><strong>Ano Fiscal</strong> — Filtra as aquisições pelo ano fiscal selecionado;</li>
          <li><strong>Tipo</strong> — Filtra por tipo de aquisição (Bens, Serviços, Empreitadas, Consultoria, etc.).</li>
        </ul>
        <h3>Registar Nova Aquisição</h3>
        <p>Para adicionar uma nova aquisição ao plano, clique no botão <strong>Adicionar Aquisição</strong>. Será apresentado um formulário popup com os seguintes campos:</p>
        <ul>
          <li><strong>Ano Fiscal</strong> — Selecione o ano fiscal correspondente ao plano de aquisição;</li>
          <li><strong>Centro de Custo</strong> — Unidade orgânica responsável pela aquisição;</li>
          <li><strong>Objeto</strong> — Descrição detalhada do bem, serviço ou empreitada a adquirir;</li>
          <li><strong>Tipo</strong> — Tipo de procedimento de contratação aplicável;</li>
          <li><strong>Quantidade</strong> — Quantidade a adquirir (quando aplicável);</li>
          <li><strong>Orçamento</strong> — Valor orçamentado para a aquisição (em escudos cabo-verdianos);</li>
          <li><strong>Data de Início</strong> — Data prevista de início do processo de aquisição;</li>
          <li><strong>Data de Fim</strong> — Data prevista de conclusão do processo.</li>
        </ul>
        <div class="figure-placeholder">Figura 3-2: Popup de Adição de Nova Aquisição ao Plano</div>
        <ol>
          <li><span class="step-badge">1</span><span>Clique em <strong>Adicionar Aquisição</strong> para abrir o formulário de registo.</span></li>
          <li><span class="step-badge">2</span><span>Selecione o <strong>Ano Fiscal</strong> e o <strong>Centro de Custo</strong> correspondentes.</span></li>
          <li><span class="step-badge">3</span><span>Descreva detalhadamente o <strong>Objeto</strong> da aquisição.</span></li>
          <li><span class="step-badge">4</span><span>Selecione o <strong>Tipo</strong> de procedimento de contratação.</span></li>
          <li><span class="step-badge">5</span><span>Indique a <strong>Quantidade</strong> e o <strong>Orçamento</strong> disponível.</span></li>
          <li><span class="step-badge">6</span><span>Defina as datas de início e fim previstas.</span></li>
          <li><span class="step-badge">7</span><span>Clique em <strong>Submeter</strong>. Será apresentado o ecrã de visualização com os detalhes da aquisição registada.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 3-3: Ecrã de Visualização dos Detalhes da Aquisição</div>
        <div class="note-box"><strong>⚠ Nota:</strong> O plano de aquisições deve ser elaborado no início de cada ano fiscal e aprovado pela direção antes de ser operacionalizado. As aquisições não planeadas ou que excedam os valores orçamentados requerem autorização prévia dos serviços competentes.</div>
      `
    },
    'ct-2-2': {
      title: '2.2 Registo de Fornecedores',
      parent: '2. Gestão de Contratos',
      content: `
        <h2>2.2 Registo de Fornecedores</h2>
        <p>O ecrã de Registo de Fornecedores permite a manutenção de uma base de dados completa e atualizada de todos os fornecedores da organização. Um registo de fornecedores adequado é fundamental para a eficiência e transparência dos processos de contratação pública.</p>
        <div class="figure-placeholder">Figura 3-4: Ecrã de Lista de Fornecedores</div>
        <h3>Lista de Fornecedores</h3>
        <p>O ecrã apresenta uma tabela com todos os fornecedores registados, permitindo pesquisa por nome, NIF ou tipo de fornecedor. Para cada fornecedor, estão disponíveis ações de visualização, edição e desativação do registo.</p>
        <h3>Adicionar Novo Fornecedor</h3>
        <p>Para registar um novo fornecedor, clique em <strong>Adicionar Fornecedor</strong>. O formulário de registo está organizado em duas secções principais:</p>
        <h4>Dados da Empresa</h4>
        <ul>
          <li><strong>Nome da Empresa</strong> — Denominação social completa do fornecedor;</li>
          <li><strong>Tipo de Fornecedor</strong> — Classificação do fornecedor (Bens, Serviços, Empreitadas, Misto);</li>
          <li><strong>Endereço Registado</strong> — Morada completa da sede social;</li>
          <li><strong>Nome da Pessoa de Contacto</strong> — Nome do responsável de contacto;</li>
          <li><strong>Número de Telefone</strong> — Contacto telefónico principal;</li>
          <li><strong>Endereço de Email</strong> — Endereço de correio eletrónico;</li>
          <li><strong>Ano de Fundação</strong> — Ano em que a empresa foi constituída;</li>
          <li><strong>Tipo de Empresa</strong> — Forma jurídica (SA, LDA, ENI, etc.);</li>
          <li><strong>Faturação Anual</strong> — Volume de negócios anual (indicativo);</li>
          <li><strong>Número de Contribuinte (NIF)</strong> — Número de Identificação Fiscal;</li>
          <li><strong>Certidão de Registo</strong> — Upload da certidão de registo comercial.</li>
        </ul>
        <h4>Dados Bancários</h4>
        <ul>
          <li><strong>Nome do Banco</strong> — Instituição bancária;</li>
          <li><strong>Nome da Agência</strong> — Agência bancária;</li>
          <li><strong>Titular da Conta</strong> — Nome do titular da conta bancária;</li>
          <li><strong>Número de Conta Bancária</strong> — Número da conta;</li>
          <li><strong>NIB</strong> — Número de Identificação Bancária;</li>
          <li><strong>Código SWIFT/BIC</strong> — Código de identificação bancária internacional (para transações internacionais).</li>
        </ul>
        <div class="figure-placeholder">Figura 3-5: Formulário de Registo de Novo Fornecedor — Dados da Empresa</div>
        <div class="figure-placeholder">Figura 3-6: Formulário de Registo de Novo Fornecedor — Dados Bancários</div>
        <ol>
          <li><span class="step-badge">1</span><span>Preencha todos os campos obrigatórios da secção <strong>Dados da Empresa</strong>.</span></li>
          <li><span class="step-badge">2</span><span>Carregue a <strong>Certidão de Registo</strong> clicando no botão de upload.</span></li>
          <li><span class="step-badge">3</span><span>Preencha os campos da secção <strong>Dados Bancários</strong>.</span></li>
          <li><span class="step-badge">4</span><span>Reveja todos os dados introduzidos para garantir a sua exatidão.</span></li>
          <li><span class="step-badge">5</span><span>Clique em <strong>Guardar</strong> para concluir o registo do fornecedor.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> Os dados bancários dos fornecedores são informação sensível e de caráter confidencial. Certifique-se de que apenas utilizadores autorizados têm acesso a esta informação. Antes de efetuar qualquer pagamento a um fornecedor, verifique sempre que os dados bancários no sistema são os corretos e estão atualizados.</div>
      `
    },
    'ct-2-3': {
      title: '2.3 Registo do Contrato',
      parent: '2. Gestão de Contratos',
      content: `
        <h2>2.3 Registo do Contrato</h2>
        <p>A secção de Registo do Contrato permite a gestão completa do ciclo de vida dos contratos da organização. Estão disponíveis duas subsecções principais que cobrem desde o registo inicial do contrato até ao acompanhamento detalhado da sua execução financeira.</p>
        <ul>
          <li><strong>2.3.1 Ver Contrato de Integração</strong> — Registo e consulta de contratos, com filtros avançados e gestão documental;</li>
          <li><strong>2.3.2 Detalhes da Execução do Contrato</strong> — Acompanhamento pormenorizado da execução financeira e das fases de pagamento.</li>
        </ul>
      `
    },
    'ct-2-3-1': {
      title: '2.3.1 Ver Contrato de Integração',
      parent: '2.3 Registo do Contrato',
      content: `
        <h2>2.3.1 Ver Contrato de Integração</h2>
        <p>O ecrã de Contrato de Integração permite a visualização, registo e gestão de todos os contratos celebrados pela organização. Através de filtros avançados e uma interface intuitiva, o utilizador pode facilmente localizar e gerir qualquer contrato no sistema.</p>
        <div class="figure-placeholder">Figura 3-7: Ecrã de Lista de Contratos de Integração</div>
        <h3>Filtros de Pesquisa</h3>
        <p>O ecrã disponibiliza os seguintes filtros para facilitar a localização de contratos:</p>
        <ul>
          <li><strong>Ano Fiscal</strong> — Filtra os contratos pelo ano fiscal de celebração;</li>
          <li><strong>Nome do Projeto</strong> — Pesquisa por nome ou descrição do projeto;</li>
          <li><strong>Formulário de Contrato</strong> — Tipo de formulário contratual utilizado;</li>
          <li><strong>Nome do Fornecedor</strong> — Filtra por fornecedor contratado;</li>
          <li><strong>Datas</strong> — Intervalo de datas de celebração do contrato;</li>
          <li><strong>Estado do Contrato</strong> — Filtra por estado (Em Vigor, Concluído, Rescindido, Suspenso).</li>
        </ul>
        <h3>Adicionar Novo Contrato</h3>
        <p>Para registar um novo contrato, clique em <strong>Adicionar Contrato</strong>. O popup de registo inclui os seguintes campos e secções:</p>
        <h4>Campos Gerais do Contrato</h4>
        <ul>
          <li>Ano Fiscal e Número do Contrato;</li>
          <li>Nome do Projeto e Descrição;</li>
          <li>Fornecedor (selecionado da base de dados de fornecedores registados);</li>
          <li>Tipo de Contrato e Forma de Contratação;</li>
          <li>Data de Início e Data de Fim prevista;</li>
          <li>Valor Total do Contrato (em escudos cabo-verdianos);</li>
          <li>Condições de Pagamento (faseado, por prestações, integral);</li>
          <li>Garantia de Execução (percentagem e valor);</li>
          <li>Detalhes de Financiamento (fonte de financiamento, código do projeto, etc.).</li>
        </ul>
        <h4>Documentos a Anexar</h4>
        <ul>
          <li>Contrato (documento principal);</li>
          <li>Anexo 1 a Anexo 4 (documentos complementares ao contrato);</li>
          <li>Caderno de Encargos;</li>
          <li>Programa de Concurso;</li>
          <li>Decisão de Contratar;</li>
          <li>Resolução de Aprovação;</li>
          <li>Garantia Bancária;</li>
          <li>Adenda (em caso de alteração ao contrato original);</li>
          <li>Nota de Referência.</li>
        </ul>
        <div class="figure-placeholder">Figura 3-8: Popup de Registo de Novo Contrato — Campos Gerais</div>
        <div class="figure-placeholder">Figura 3-9: Popup de Registo de Novo Contrato — Secção de Documentos</div>
        <ol>
          <li><span class="step-badge">1</span><span>Preencha todos os campos obrigatórios na secção de dados gerais do contrato.</span></li>
          <li><span class="step-badge">2</span><span>Selecione o <strong>Fornecedor</strong> na lista de fornecedores registados no sistema.</span></li>
          <li><span class="step-badge">3</span><span>Defina as <strong>Condições de Pagamento</strong> e a <strong>Garantia de Execução</strong>.</span></li>
          <li><span class="step-badge">4</span><span>Carregue todos os documentos obrigatórios na secção de anexos.</span></li>
          <li><span class="step-badge">5</span><span>Reveja todos os dados introduzidos para garantir a conformidade com o contrato físico.</span></li>
          <li><span class="step-badge">6</span><span>Clique em <strong>Guardar</strong> para registar o contrato no sistema.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> O registo de um contrato no sistema deve ser efetuado imediatamente após a sua celebração. Certifique-se de que todos os documentos obrigatórios estão devidamente digitalizados e em formato PDF antes de os anexar ao contrato. Os documentos originais devem ser arquivados fisicamente no processo correspondente.</div>
      `
    },
    'ct-2-3-2': {
      title: '2.3.2 Detalhes da Execução do Contrato',
      parent: '2.3 Registo do Contrato',
      content: `
        <h2>2.3.2 Detalhes da Execução do Contrato</h2>
        <p>O ecrã de Detalhes da Execução do Contrato permite o acompanhamento pormenorizado e em tempo real da execução financeira de cada contrato, incluindo a gestão das fases de pagamento, garantias e documentação associada.</p>
        <div class="figure-placeholder">Figura 3-10: Ecrã de Lista de Execução de Contratos</div>
        <h3>Aceder à Execução de um Contrato</h3>
        <p>Para aceder aos detalhes de execução de um contrato específico:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Localize o contrato pretendido na lista, utilizando os filtros disponíveis.</span></li>
          <li><span class="step-badge">2</span><span>Clique no ícone de <strong>Editar</strong> na linha correspondente ao contrato.</span></li>
          <li><span class="step-badge">3</span><span>Será apresentado o formulário de execução com todas as fases de pagamento definidas no contrato.</span></li>
        </ol>
        <h3>Formulário de Execução</h3>
        <p>O formulário de execução apresenta uma tabela com as fases de pagamento do contrato, incluindo os seguintes campos para cada fase:</p>
        <ul>
          <li><strong>Percentagem</strong> — Percentagem do valor total do contrato correspondente à fase;</li>
          <li><strong>Valor</strong> — Valor monetário da fase de pagamento;</li>
          <li><strong>Estado</strong> — Estado atual da fase (Pendente, Em Processamento, Pago);</li>
          <li><strong>Data de Pagamento</strong> — Data efetiva ou prevista do pagamento;</li>
          <li><strong>Garantia</strong> — Valor de garantia retido (se aplicável);</li>
          <li><strong>Imposto</strong> — Valor de impostos aplicáveis;</li>
          <li><strong>Total</strong> — Valor líquido a pagar após deduções.</li>
        </ul>
        <div class="figure-placeholder">Figura 3-11: Formulário de Execução do Contrato com Fases de Pagamento</div>
        <h3>Gestão de Documentos de Execução</h3>
        <p>Para cada fase de pagamento, o sistema permite o carregamento de documentos específicos:</p>
        <ul>
          <li><strong>Fatura</strong> — Carregamento da fatura emitida pelo fornecedor para a fase correspondente. Clique no botão <strong>Fatura</strong> para fazer o upload do documento.</li>
          <li><strong>Comprovativo de Pagamento</strong> — Após o processamento do pagamento, carregue o comprovativo clicando no botão <strong>Pagamento</strong>.</li>
        </ul>
        <div class="figure-placeholder">Figura 3-12: Botões de Upload de Fatura e Comprovativo de Pagamento</div>
        <h3>Caução e Devolução de Depósito de Segurança</h3>
        <p>O sistema permite também a gestão da caução (depósito de segurança) associada ao contrato:</p>
        <ul>
          <li><strong>Devolução de Caução</strong> — Registo da devolução total ou parcial do depósito de segurança ao fornecedor, após a conclusão das obrigações contratuais;</li>
          <li><strong>Documento de Caução</strong> — Upload do documento comprovativo da caução prestada.</li>
        </ul>
        <div class="figure-placeholder">Figura 3-13: Secção de Gestão de Caução do Contrato</div>
        <div class="note-box"><strong>⚠ Nota:</strong> O registo das faturas e dos comprovativos de pagamento deve ser efetuado imediatamente após a receção dos mesmos. A correta atualização dos estados de pagamento no sistema é fundamental para garantir a fiabilidade dos relatórios financeiros e o cumprimento das obrigações de reporte da organização. Todos os documentos devem ser carregados em formato PDF com resolução mínima de 300 DPI para garantir a legibilidade.</div>
      `
    },
  }
};
