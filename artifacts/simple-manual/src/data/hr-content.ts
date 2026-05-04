import type { Module } from './types';

export const hrModule: Module = {
  id: 'hr',
  title: 'Módulo de Recursos Humanos',
  icon: '📘',
  tree: [
    {
      id: 'hr-1', label: '1. Visão Geral', children: [
        { id: 'hr-1-1', label: '1.1 Objetivo', isLeaf: true },
        { id: 'hr-1-2', label: '1.2 Como Começar', isLeaf: true },
      ]
    },
    {
      id: 'hr-2', label: '2. RH', children: [
        { id: 'hr-2-1', label: '2.1 Registo de Emprego', isLeaf: true },
        {
          id: 'hr-2-2', label: '2.2 Presença', children: [
            { id: 'hr-2-2-1', label: '2.2.1 Atribuição de Licenças', isLeaf: true },
            { id: 'hr-2-2-2', label: '2.2.2 Plano de Férias', isLeaf: true },
            { id: 'hr-2-2-3', label: '2.2.3 Assiduidade Diária', isLeaf: true },
            { id: 'hr-2-2-4', label: '2.2.4 Gestão de Ausências', isLeaf: true },
            { id: 'hr-2-2-5', label: '2.2.5 Gestão de Horas Extraordinárias', isLeaf: true },
          ]
        },
        {
          id: 'hr-2-3', label: '2.3 Serviço Online', children: [
            { id: 'hr-2-3-1', label: '2.3.1 Certificado de Declaração de Emprego', isLeaf: true },
            { id: 'hr-2-3-2', label: '2.3.2 Certificado de Declaração Salarial', isLeaf: true },
          ]
        },
      ]
    },
  ],
  sections: {
    'hr-1': {
      title: '1. Visão Geral',
      content: `
        <h2>1. Visão Geral</h2>
        <p>O Módulo de Recursos Humanos do SIMple Project é uma solução integrada para a gestão das principais operações de RH na plataforma IGRP (Infraestrutura de Gestão e Recursos Públicos), amplamente utilizada na administração municipal em Cabo Verde.</p>
        <p>Este módulo centraliza todas as operações relacionadas com colaboradores, desde o registo inicial até à gestão de presenças, licenças, férias, ausências, horas extraordinárias e emissão de certificados online.</p>
        <p>O Módulo de RH encontra-se profundamente integrado com os restantes módulos do SIMple Project, permitindo uma visão unificada e em tempo real de toda a força de trabalho da organização.</p>
      `
    },
    'hr-1-1': {
      title: '1.1 Objetivo',
      parent: '1. Visão Geral',
      content: `
        <h2>1.1 Objetivo</h2>
        <p>O principal objetivo do Módulo de Recursos Humanos é dotar as entidades municipais de uma ferramenta robusta e eficiente para a gestão integral dos seus colaboradores, garantindo conformidade com a legislação laboral vigente em Cabo Verde.</p>
        <p>De forma mais específica, este módulo visa:</p>
        <ul>
          <li>Centralizar o registo e manutenção dos dados pessoais e profissionais de todos os funcionários;</li>
          <li>Automatizar o controlo de presenças, ausências, licenças e férias;</li>
          <li>Simplificar o processo de pedido e aprovação de licenças e férias;</li>
          <li>Garantir um registo rigoroso das horas extraordinárias realizadas pelos colaboradores;</li>
          <li>Disponibilizar serviços online de emissão de certificados de emprego e salariais;</li>
          <li>Reduzir a burocracia interna e os processos em papel, promovendo a digitalização dos serviços de RH;</li>
          <li>Fornecer informação de gestão em tempo real para apoio à decisão dos responsáveis de RH.</li>
        </ul>
        <p>O módulo foi concebido para ser intuitivo e acessível, permitindo que os utilizadores realizem as suas tarefas de forma autónoma e eficiente, sem necessidade de formação técnica especializada.</p>
      `
    },
    'hr-1-2': {
      title: '1.2 Como Começar',
      parent: '1. Visão Geral',
      content: `
        <h2>1.2 Como Começar</h2>
        <p>Para aceder ao Módulo de Recursos Humanos do SIMple Project, siga os passos descritos abaixo:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Abra o seu navegador de internet (recomendamos Google Chrome ou Mozilla Firefox na versão mais recente) e aceda ao endereço da plataforma SIMple fornecido pelo seu administrador de sistema.</span></li>
          <li><span class="step-badge">2</span><span>Na página de acesso, introduza as suas credenciais: <strong>ID de Funcionário</strong> e <strong>Senha</strong>. Clique em <strong>Iniciar Sessão</strong>.</span></li>
          <li><span class="step-badge">3</span><span>Após a autenticação bem-sucedida, será redirecionado para o painel principal do SIMple Project. No menu lateral, localize e clique em <strong>Recursos Humanos</strong> para expandir o módulo.</span></li>
          <li><span class="step-badge">4</span><span>Selecione a funcionalidade pretendida na árvore de navegação lateral para aceder ao ecrã correspondente.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> O acesso às diferentes funcionalidades do módulo está condicionado aos perfis e permissões atribuídos ao seu utilizador pelo administrador do sistema. Caso não consiga visualizar alguma funcionalidade, contacte o seu administrador.</div>
        <div class="figure-placeholder">Figura 1-1: Ecrã de Login do SIMple Project</div>
        <div class="figure-placeholder">Figura 1-2: Painel principal com menu lateral de Recursos Humanos</div>
      `
    },
    'hr-2': {
      title: '2. RH',
      content: `
        <h2>2. RH</h2>
        <p>A secção de Recursos Humanos engloba as principais funcionalidades de gestão de colaboradores da plataforma SIMple. Através desta secção, os responsáveis de RH têm acesso a todas as ferramentas necessárias para a gestão do ciclo de vida dos funcionários.</p>
        <p>As subsecções disponíveis são:</p>
        <ul>
          <li><strong>2.1 Registo de Emprego</strong> — Gestão da ficha de colaborador e registo de novos funcionários;</li>
          <li><strong>2.2 Presença</strong> — Controlo de assiduidade, licenças, férias, ausências e horas extraordinárias;</li>
          <li><strong>2.3 Serviço Online</strong> — Emissão de certificados e declarações em formato digital.</li>
        </ul>
      `
    },
    'hr-2-1': {
      title: '2.1 Registo de Emprego',
      parent: '2. RH',
      content: `
        <h2>2.1 Registo de Emprego</h2>
        <p>O ecrã de Registo de Emprego permite a gestão completa da lista de funcionários da organização. Neste ecrã, o utilizador pode visualizar todos os colaboradores registados, bem como adicionar novos funcionários ao sistema.</p>
        <div class="figure-placeholder">Figura 2-1: Ecrã de Lista de Funcionários — Registo de Emprego</div>
        <h3>Lista de Funcionários</h3>
        <p>O ecrã principal apresenta uma tabela com todos os funcionários registados no sistema. Para cada funcionário, estão disponíveis as seguintes ações:</p>
        <ul>
          <li><strong>Ver</strong> — Visualizar os detalhes completos do funcionário;</li>
          <li><strong>Editar</strong> — Alterar os dados do funcionário;</li>
          <li><strong>Eliminar</strong> — Remover o registo do funcionário (requer confirmação).</li>
        </ul>
        <h3>Adicionar Novo Funcionário</h3>
        <p>Para registar um novo funcionário no sistema, clique no botão <strong>Novo Funcionário</strong>, localizado no canto superior direito do ecrã. Será apresentado um formulário em popup com três separadores:</p>
        <ol>
          <li><span class="step-badge">1</span><span><strong>Validar Registo</strong> — Neste separador, o sistema valida os dados iniciais do funcionário, verificando a unicidade do número de identificação e a conformidade dos dados introduzidos.</span></li>
          <li><span class="step-badge">2</span><span><strong>Dados Pessoais</strong> — Preenchimento dos dados pessoais do funcionário, incluindo nome completo, data de nascimento, género, estado civil, morada, contactos e informações de identificação (BI/Passaporte, NIF).</span></li>
          <li><span class="step-badge">3</span><span><strong>Anexo</strong> — Carregamento de documentos relevantes, como fotografia, documentos de identificação e outros documentos exigidos pelo departamento de RH.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 2-2: Popup de Novo Funcionário — Separador "Validar Registo"</div>
        <div class="figure-placeholder">Figura 2-3: Popup de Novo Funcionário — Separador "Dados Pessoais"</div>
        <div class="figure-placeholder">Figura 2-4: Popup de Novo Funcionário — Separador "Anexo"</div>
        <div class="note-box"><strong>⚠ Nota:</strong> Após preencher todos os campos obrigatórios (assinalados com *), clique em <strong>Guardar</strong> para concluir o registo. O novo funcionário ficará imediatamente disponível na lista de colaboradores.</div>
      `
    },
    'hr-2-2': {
      title: '2.2 Presença',
      parent: '2. RH',
      content: `
        <h2>2.2 Presença</h2>
        <p>A secção de Presença agrupa todas as funcionalidades relacionadas com o controlo de assiduidade e gestão do tempo dos colaboradores. Através destas ferramentas, o departamento de RH pode gerir de forma eficiente todos os aspetos relacionados com a presença e ausência dos funcionários.</p>
        <p>As funcionalidades disponíveis nesta secção são:</p>
        <ul>
          <li><strong>2.2.1 Atribuição de Licenças</strong> — Gestão da atribuição e planeamento de licenças aos colaboradores;</li>
          <li><strong>2.2.2 Plano de Férias</strong> — Gestão e marcação do plano de férias anual;</li>
          <li><strong>2.2.3 Assiduidade Diária</strong> — Registo e consulta das entradas e saídas diárias;</li>
          <li><strong>2.2.4 Gestão de Ausências</strong> — Registo e gestão de ausências não programadas;</li>
          <li><strong>2.2.5 Gestão de Horas Extraordinárias</strong> — Registo de trabalho em horas extraordinárias.</li>
        </ul>
      `
    },
    'hr-2-2-1': {
      title: '2.2.1 Atribuição de Licenças',
      parent: '2.2 Presença',
      content: `
        <h2>2.2.1 Atribuição de Licenças</h2>
        <p>O ecrã de Atribuição de Licenças permite ao departamento de RH gerir a atribuição de diferentes tipos de licença aos colaboradores da organização, bem como consultar o planeamento global das licenças.</p>
        <div class="figure-placeholder">Figura 2-5: Ecrã de Atribuição de Licenças</div>
        <h3>Lista de Atribuições</h3>
        <p>O ecrã principal apresenta uma lista com todas as licenças atribuídas, indicando o colaborador, o tipo de licença, o período e o estado (Pendente, Aprovada, Rejeitada).</p>
        <h3>Atribuir Nova Licença</h3>
        <p>Para atribuir uma nova licença a um colaborador, siga os seguintes passos:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Clique no botão <strong>Atribuir Licença</strong> no topo do ecrã. Será apresentado o formulário de atribuição.</span></li>
          <li><span class="step-badge">2</span><span>Selecione o <strong>Funcionário</strong> pretendido na lista pendente. Pode pesquisar pelo nome ou número de funcionário.</span></li>
          <li><span class="step-badge">3</span><span>Escolha o <strong>Tipo de Licença</strong> na lista disponível (ex.: Licença de Maternidade, Licença por Doença, Licença Parental, etc.).</span></li>
          <li><span class="step-badge">4</span><span>Defina a <strong>Data de Início</strong> e a <strong>Data de Fim</strong> da licença utilizando o seletor de datas.</span></li>
          <li><span class="step-badge">5</span><span>Preencha o campo <strong>Justificação</strong> com a descrição adequada e anexe os documentos de suporte necessários.</span></li>
          <li><span class="step-badge">6</span><span>Clique em <strong>Submeter</strong> para enviar a solicitação para aprovação.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 2-6: Formulário de Atribuição de Licença</div>
        <h3>Ecrã de Planeamento</h3>
        <p>O ecrã de Planeamento apresenta uma visão calendárica das licenças atribuídas, permitindo identificar facilmente os períodos de ausência planeados para cada colaborador ou departamento.</p>
        <div class="figure-placeholder">Figura 2-7: Ecrã de Planeamento de Licenças</div>
        <div class="note-box"><strong>⚠ Nota:</strong> As licenças submetidas ficam em estado "Pendente" até serem aprovadas pelo responsável hierárquico. O colaborador receberá uma notificação no sistema após a aprovação ou rejeição da licença.</div>
      `
    },
    'hr-2-2-2': {
      title: '2.2.2 Plano de Férias',
      parent: '2.2 Presença',
      content: `
        <h2>2.2.2 Plano de Férias</h2>
        <p>O ecrã de Plano de Férias permite a gestão e marcação das férias anuais dos colaboradores. O sistema controla automaticamente os saldos de férias, tendo em conta os dias disponíveis, os dias já gozados e os dias transitados do ano anterior.</p>
        <div class="figure-placeholder">Figura 2-8: Ecrã de Lista do Plano de Férias</div>
        <h3>Lista de Planos de Férias</h3>
        <p>O ecrã apresenta uma lista com todos os planos de férias registados para o ano corrente, incluindo informação sobre o estado de aprovação de cada pedido.</p>
        <h3>Marcar Férias</h3>
        <p>Para registar um pedido de férias, clique em <strong>Plano de Férias</strong> e preencha o formulário com os seguintes campos:</p>
        <ul>
          <li><strong>Saldo Atual</strong> — Número total de dias de férias disponíveis para o ano corrente (preenchido automaticamente pelo sistema);</li>
          <li><strong>Transitado</strong> — Dias de férias transitados do ano anterior (preenchido automaticamente);</li>
          <li><strong>Saldo Disponível</strong> — Total de dias disponíveis para marcação (Saldo Atual + Transitado - Dias já marcados);</li>
          <li><strong>Trimestre</strong> — Selecionar o trimestre em que as férias serão gozadas (1.º, 2.º, 3.º ou 4.º trimestre);</li>
          <li><strong>De</strong> — Data de início das férias;</li>
          <li><strong>Até</strong> — Data de fim das férias;</li>
          <li><strong>Dias</strong> — Número de dias úteis de férias (calculado automaticamente com base nas datas selecionadas);</li>
          <li><strong>Descrição</strong> — Campo opcional para observações adicionais;</li>
          <li><strong>Anexar Documento</strong> — Possibilidade de anexar documentos relevantes (opcional).</li>
        </ul>
        <div class="figure-placeholder">Figura 2-9: Formulário de Marcação de Férias</div>
        <ol>
          <li><span class="step-badge">1</span><span>Selecione o <strong>Trimestre</strong> correspondente ao período de férias pretendido.</span></li>
          <li><span class="step-badge">2</span><span>Defina a <strong>Data de Início</strong> (<em>De</em>) e a <strong>Data de Fim</strong> (<em>Até</em>). O sistema calculará automaticamente o número de dias úteis.</span></li>
          <li><span class="step-badge">3</span><span>Verifique se o <strong>Saldo Disponível</strong> é suficiente para cobrir o período selecionado.</span></li>
          <li><span class="step-badge">4</span><span>Preencha o campo <strong>Descrição</strong> (opcional) e anexe documentos se necessário.</span></li>
          <li><span class="step-badge">5</span><span>Clique em <strong>Guardar</strong> para submeter o pedido de férias para aprovação.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> O sistema não permite a marcação de férias que excedam o saldo disponível. Certifique-se de que possui dias suficientes antes de submeter o pedido. Os fins-de-semana e feriados não são contabilizados no total de dias de férias.</div>
      `
    },
    'hr-2-2-3': {
      title: '2.2.3 Assiduidade Diária',
      parent: '2.2 Presença',
      content: `
        <h2>2.2.3 Assiduidade Diária</h2>
        <p>O ecrã de Assiduidade Diária permite o registo e consulta das entradas e saídas dos colaboradores, possibilitando o controlo rigoroso das horas trabalhadas por cada funcionário em cada dia.</p>
        <div class="figure-placeholder">Figura 2-10: Ecrã de Assiduidade Diária</div>
        <h3>Funcionalidades do Ecrã</h3>
        <p>O ecrã de Assiduidade Diária dispõe das seguintes funcionalidades:</p>
        <ul>
          <li><strong>Seletor de Data</strong> — Permite selecionar o dia para o qual se pretende consultar ou registar a assiduidade;</li>
          <li><strong>Registo de Entrada</strong> — Hora de entrada de cada colaborador;</li>
          <li><strong>Registo de Saída</strong> — Hora de saída de cada colaborador;</li>
          <li><strong>Total de Horas</strong> — Cálculo automático das horas trabalhadas por funcionário;</li>
          <li><strong>Exportar</strong> — Exportação dos dados de assiduidade para formato Excel ou PDF.</li>
        </ul>
        <h3>Registo Manual de Assiduidade</h3>
        <p>Para registar manualmente a assiduidade de um colaborador, siga os passos seguintes:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Selecione a <strong>Data</strong> pretendida no seletor de datas no topo do ecrã.</span></li>
          <li><span class="step-badge">2</span><span>Localize o colaborador pretendido na lista apresentada.</span></li>
          <li><span class="step-badge">3</span><span>Introduza a <strong>Hora de Entrada</strong> no campo correspondente.</span></li>
          <li><span class="step-badge">4</span><span>Introduza a <strong>Hora de Saída</strong> no campo correspondente.</span></li>
          <li><span class="step-badge">5</span><span>O sistema calculará automaticamente o total de horas trabalhadas.</span></li>
          <li><span class="step-badge">6</span><span>Clique em <strong>Guardar</strong> para confirmar o registo.</span></li>
        </ol>
        <h3>Exportação de Dados</h3>
        <p>Para exportar os dados de assiduidade, clique no botão <strong>Exportar</strong> e selecione o formato pretendido (Excel ou PDF). O ficheiro será gerado e disponibilizado para download.</p>
        <div class="figure-placeholder">Figura 2-11: Opções de Exportação da Assiduidade Diária</div>
        <div class="note-box"><strong>⚠ Nota:</strong> Está prevista, numa fase futura, a integração com o sistema biométrico da organização, o que permitirá o registo automático das entradas e saídas dos colaboradores. Até à conclusão dessa integração, o registo deverá ser efetuado manualmente pelos responsáveis de RH.</div>
      `
    },
    'hr-2-2-4': {
      title: '2.2.4 Gestão de Ausências',
      parent: '2.2 Presença',
      content: `
        <h2>2.2.4 Gestão de Ausências</h2>
        <p>O ecrã de Gestão de Ausências permite o registo e acompanhamento das ausências não programadas dos colaboradores, assegurando um controlo rigoroso e completo de todas as situações de falta ao trabalho.</p>
        <div class="figure-placeholder">Figura 2-12: Ecrã Principal de Gestão de Ausências</div>
        <p>O ecrã disponibiliza dois modos de pesquisa e registo de ausências:</p>
        <h3>Modo 1: Por Centro de Custo</h3>
        <p>Este modo permite registar e consultar as ausências agrupadas por centro de custo. O formulário inclui os seguintes campos:</p>
        <ul>
          <li><strong>Funcionário</strong> — Seleção do colaborador afetado;</li>
          <li><strong>Saldo Atual</strong> — Saldo de dias disponíveis (preenchido automaticamente);</li>
          <li><strong>Saldo Transitado</strong> — Dias transitados do período anterior;</li>
          <li><strong>Saldo Disponível</strong> — Total disponível após deduções;</li>
          <li><strong>Tipo de Ausência</strong> — Seleção do motivo da ausência (ex.: Doença, Assistência a Familiar, Luto, etc.);</li>
          <li><strong>Data de Início</strong> — Data de início da ausência;</li>
          <li><strong>Data de Fim</strong> — Data prevista de regresso;</li>
          <li><strong>Método de Introdução</strong> — Como foi registada a ausência (Manual, Biométrico, etc.);</li>
          <li><strong>Tipo de Documento</strong> — Tipo de justificação apresentada;</li>
          <li><strong>Carregar Ficheiro</strong> — Upload do documento justificativo;</li>
          <li><strong>Descrição</strong> — Campo de observações adicionais.</li>
        </ul>
        <div class="figure-placeholder">Figura 2-13: Formulário de Registo de Ausência por Centro de Custo</div>
        <h3>Modo 2: Por Funcionário</h3>
        <p>Este modo permite pesquisar diretamente por funcionário para consultar e gerir as suas ausências individualmente.</p>
        <ol>
          <li><span class="step-badge">1</span><span>No campo de pesquisa, introduza o nome ou número do funcionário.</span></li>
          <li><span class="step-badge">2</span><span>Selecione o funcionário pretendido nos resultados apresentados.</span></li>
          <li><span class="step-badge">3</span><span>Clique no botão de ação para aceder ao formulário de registo de ausência para esse funcionário.</span></li>
          <li><span class="step-badge">4</span><span>Preencha os campos do formulário e clique em <strong>Guardar</strong>.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 2-14: Pesquisa de Ausências por Funcionário</div>
        <div class="note-box"><strong>⚠ Nota:</strong> O registo de ausências deve ser efetuado o mais brevemente possível. As ausências não justificadas no prazo estabelecido pela organização podem ter implicações disciplinares para o colaborador. Certifique-se de que o documento justificativo é anexado em formato PDF ou imagem (JPG, PNG).</div>
      `
    },
    'hr-2-2-5': {
      title: '2.2.5 Gestão de Horas Extraordinárias',
      parent: '2.2 Presença',
      content: `
        <h2>2.2.5 Gestão de Horas Extraordinárias</h2>
        <p>O ecrã de Gestão de Horas Extraordinárias permite o registo e controlo das horas de trabalho realizadas fora do horário normal pelos colaboradores. O sistema suporta dois modos de registo — por Centro de Custo e por Funcionário — adaptando-se às diferentes necessidades de gestão.</p>
        <div class="figure-placeholder">Figura 2-15: Ecrã de Lista de Horas Extraordinárias</div>
        <h3>Lista de Horas Extraordinárias</h3>
        <p>O ecrã principal apresenta uma lista com todos os registos de horas extraordinárias, incluindo o colaborador, o tipo, a data, o total de horas e o estado de aprovação.</p>
        <h3>Registar Horas Extraordinárias</h3>
        <p>Para registar novas horas extraordinárias, selecione o modo de registo pretendido:</p>
        <h4>Por Centro de Custo</h4>
        <p>O formulário de registo por centro de custo inclui os seguintes campos:</p>
        <ul>
          <li><strong>Funcionário</strong> — Seleção do(s) colaborador(es) que realizou(aram) horas extraordinárias;</li>
          <li><strong>Tipo de Hora Extraordinária</strong> — Tipo de compensação aplicável (ex.: Compensação em Tempo, Pagamento Simples, Pagamento em Dobro);</li>
          <li><strong>Data</strong> — Data em que foram realizadas as horas extraordinárias;</li>
          <li><strong>Total de Horas</strong> — Número total de horas extraordinárias realizadas;</li>
          <li><strong>Documento de Suporte</strong> — Documento justificativo do trabalho realizado (upload).</li>
        </ul>
        <div class="figure-placeholder">Figura 2-16: Formulário de Registo de Horas Extraordinárias</div>
        <h4>Adicionar Mais Funcionários</h4>
        <p>O formulário permite registar horas extraordinárias para múltiplos funcionários em simultâneo. Para adicionar mais colaboradores, clique no botão <strong>Adicionar Mais Funcionários</strong> e repita o processo de seleção e preenchimento para cada colaborador adicional.</p>
        <ol>
          <li><span class="step-badge">1</span><span>Selecione o <strong>Funcionário</strong> na lista pendente.</span></li>
          <li><span class="step-badge">2</span><span>Selecione o <strong>Tipo de Hora Extraordinária</strong>.</span></li>
          <li><span class="step-badge">3</span><span>Indique a <strong>Data</strong> em que foram realizadas as horas.</span></li>
          <li><span class="step-badge">4</span><span>Introduza o <strong>Total de Horas</strong> realizadas.</span></li>
          <li><span class="step-badge">5</span><span>Carregue o <strong>Documento de Suporte</strong> clicando no botão de upload.</span></li>
          <li><span class="step-badge">6</span><span>Se necessário, clique em <strong>Adicionar Mais Funcionários</strong> para incluir outros colaboradores.</span></li>
          <li><span class="step-badge">7</span><span>Clique em <strong>Guardar</strong> para submeter o registo.</span></li>
        </ol>
        <div class="note-box"><strong>⚠ Nota:</strong> O registo de horas extraordinárias deve ser efetuado pelo responsável do departamento ou pelo técnico de RH responsável. Certifique-se de que o documento de suporte está devidamente assinado e carimbado antes de o anexar ao sistema.</div>
      `
    },
    'hr-2-3': {
      title: '2.3 Serviço Online',
      parent: '2. RH',
      content: `
        <h2>2.3 Serviço Online</h2>
        <p>A secção de Serviço Online disponibiliza ao departamento de RH ferramentas para a emissão de certificados e declarações em formato digital, eliminando a necessidade de processos manuais em papel e reduzindo significativamente o tempo de resposta a pedidos dos colaboradores.</p>
        <p>Estão disponíveis os seguintes serviços:</p>
        <ul>
          <li><strong>2.3.1 Certificado de Declaração de Emprego</strong> — Emissão de declaração que comprova o vínculo laboral do colaborador com a organização;</li>
          <li><strong>2.3.2 Certificado de Declaração Salarial</strong> — Emissão de declaração com informação sobre a remuneração auferida pelo colaborador.</li>
        </ul>
        <p>Estes certificados podem ser gerados em formato PDF, prontos para impressão ou envio por via eletrónica.</p>
      `
    },
    'hr-2-3-1': {
      title: '2.3.1 Certificado de Declaração de Emprego',
      parent: '2.3 Serviço Online',
      content: `
        <h2>2.3.1 Certificado de Declaração de Emprego</h2>
        <p>O Certificado de Declaração de Emprego é um documento oficial que comprova o vínculo laboral do colaborador com a organização, indicando o cargo, a data de início de funções e outras informações profissionais relevantes.</p>
        <div class="figure-placeholder">Figura 2-17: Ecrã de Emissão de Certificado de Declaração de Emprego</div>
        <h3>Como Emitir o Certificado</h3>
        <p>Para gerar um Certificado de Declaração de Emprego, siga os passos seguintes:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Aceda ao ecrã de <strong>Certificado de Declaração de Emprego</strong> através do menu lateral.</span></li>
          <li><span class="step-badge">2</span><span>Utilize os filtros disponíveis para localizar o colaborador pretendido: pesquise pelo <strong>Nome</strong>, <strong>Número de Funcionário</strong> ou <strong>Departamento</strong>.</span></li>
          <li><span class="step-badge">3</span><span>Selecione o colaborador na lista de resultados.</span></li>
          <li><span class="step-badge">4</span><span>Verifique se os dados apresentados estão corretos e atualizados.</span></li>
          <li><span class="step-badge">5</span><span>Clique no botão <strong>Gerar Certificado</strong>. O sistema processará o pedido e gerará automaticamente o documento em formato PDF.</span></li>
          <li><span class="step-badge">6</span><span>Clique em <strong>Descarregar</strong> para guardar o ficheiro PDF no seu dispositivo ou em <strong>Imprimir</strong> para impressão imediata.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 2-18: Pré-visualização do Certificado de Declaração de Emprego</div>
        <div class="note-box"><strong>⚠ Nota:</strong> O certificado gerado pelo sistema possui validade legal e inclui a assinatura digital do responsável de RH e o carimbo eletrónico da organização. Em caso de necessidade de assinatura manuscrita, imprima o documento e proceda à assinatura manual.</div>
      `
    },
    'hr-2-3-2': {
      title: '2.3.2 Certificado de Declaração Salarial',
      parent: '2.3 Serviço Online',
      content: `
        <h2>2.3.2 Certificado de Declaração Salarial</h2>
        <p>O Certificado de Declaração Salarial é um documento oficial que atesta a remuneração auferida pelo colaborador, sendo frequentemente solicitado para fins bancários, habitacionais ou fiscais.</p>
        <div class="figure-placeholder">Figura 2-19: Ecrã de Emissão de Certificado de Declaração Salarial</div>
        <h3>Como Emitir o Certificado Salarial</h3>
        <p>Para gerar um Certificado de Declaração Salarial, siga os passos seguintes:</p>
        <ol>
          <li><span class="step-badge">1</span><span>Aceda ao ecrã de <strong>Certificado de Declaração Salarial</strong> através do menu lateral.</span></li>
          <li><span class="step-badge">2</span><span>Utilize os filtros para localizar o colaborador: pesquise pelo <strong>Nome</strong>, <strong>Número de Funcionário</strong> ou <strong>Centro de Custo</strong>.</span></li>
          <li><span class="step-badge">3</span><span>Selecione o colaborador pretendido e verifique os dados salariais apresentados.</span></li>
          <li><span class="step-badge">4</span><span>Selecione o <strong>Ano</strong> e o <strong>Período</strong> para o qual se pretende emitir a declaração salarial.</span></li>
          <li><span class="step-badge">5</span><span>Clique em <strong>Gerar Certificado</strong> para processar o pedido.</span></li>
          <li><span class="step-badge">6</span><span>Após a geração do documento, clique em <strong>Descarregar</strong> para guardar o PDF ou <strong>Imprimir</strong> para impressão direta.</span></li>
        </ol>
        <div class="figure-placeholder">Figura 2-20: Pré-visualização do Certificado de Declaração Salarial</div>
        <div class="note-box"><strong>⚠ Nota:</strong> A declaração salarial inclui informação confidencial sobre a remuneração do colaborador. Assegure-se de que o documento é entregue exclusivamente ao colaborador a quem diz respeito ou, mediante autorização expressa do mesmo, a terceiros devidamente identificados. Este documento tem validade de 90 dias a partir da data de emissão.</div>
      `
    },
  }
};
