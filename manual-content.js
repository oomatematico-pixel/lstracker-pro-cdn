// ==========================================
// CONTEÚDO DO WHITE PAPER - L&S Tracker Pro v12.5.5
// ==========================================

const MANUAL_HTML_CONTENT = `
    <!-- 1. TERMO DE ISENÇÃO (DISCLAIMER) -->
    <section class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
        <h4 class="font-bold text-red-800 uppercase text-xs mb-2">Termo de Isenção de Responsabilidade</h4>
        <p class="text-[11px] text-red-700 leading-relaxed">
            O <b>L&S Tracker Pro</b> é uma ferramenta de auxílio à análise estatística e não constitui recomendação de compra ou venda de ativos. 
            Operações de Long & Short (Arbitragem Estatística) envolvem riscos significativos de capital. O desenvolvedor não se responsabiliza 
            por perdas financeiras. A validação das métricas, a escolha dos pares e a execução em corretora são de inteira responsabilidade do usuário.
        </p>
    </section>

    <!-- 2. GUIA TÉCNICO: GESTÃO DE DADOS E PERFORMANCE -->
    <section class="bg-slate-50 p-6 rounded-lg border border-slate-100">
        <h4 class="font-bold text-blue-600 uppercase text-[10px] mb-4 tracking-widest">Guia Técnico: Inteligência de Dados</h4>
        <div class="space-y-4 text-xs leading-relaxed">
            <p>O sistema utiliza uma arquitetura de 3 camadas para otimizar a velocidade e proteger seu Token de dados:</p>
            <div class="border-l-2 border-blue-200 pl-3">
                <p><b>Camada 1 (RAM):</b> Memória de curto prazo. Permite ajustes instantâneos de parâmetros no par atual sem nova consulta à internet.</p>
            </div>
            <div class="border-l-2 border-blue-200 pl-3">
                <p><b>Camada 2 (IndexedDB):</b> Banco de dados local robusto. Armazena o histórico das ações no seu navegador de forma permanente.</p>
            </div>
            <div class="border-l-2 border-blue-200 pl-3">
                <p><b>Camada 3 (Cloud API):</b> Conexão direta com a B3 via Brapi (Principal) e HG Brasil (Contingência).</p>
            </div>
        </div>
    </section>

    <!-- 3. ESPECIFICAÇÕES DOS MÓDULOS -->
    <section class="space-y-6">
        <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Módulo 1: Análise de Spread e Desvio</h4>
            <p class="text-xs"><b>Objetivo:</b> Identificar distorções estatísticas via Z-Score. Comandos: <b>ANALISAR PAR (API)</b> para novos dados e <b>ATUALIZAR GRÁFICO (LOCAL)</b> para ajustes rápidos.</p>
        </div>
        <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Módulo 2: Simulador de Alocação e Risco</h4>
            <p class="text-xs"><b>Objetivo:</b> Dimensionar o Hedge via Beta de Regressão e monitorar a <b>Utilização de Capital</b> (Saúde Financeira).</p>
        </div>
        <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Módulo 3: Scanner de Oportunidades</h4>
            <p class="text-xs"><b>Objetivo:</b> Varredura automatizada com teste <b>ADF</b>. Clique na linha da tabela para carregar o par no gráfico.</p>
        </div>
        <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Módulo 4: Acompanhamento de Operações</h4>
            <p class="text-xs"><b>Objetivo:</b> Gestão de portfólio com cálculo de <b>Yield (%)</b>, Ratio Tracker e tempo decorrido.</p>
        </div>
    </section>

    <!-- 4. INTEGRAÇÃO E TERMINAIS DE DADOS (API) -->
    <section class="space-y-4">
        <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Provedores de Dados (API)</h4>
        
        <div class="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r mb-4">
            <p class="text-[11px] text-orange-800">
                <b>Isenção de Responsabilidade sobre Terceiros:</b> O desenvolvedor não se responsabiliza por falhas, instabilidades, manutenções ou alterações administrativas promovidas pelas empresas fornecedoras das APIs (Brapi ou HG Brasil), que possam acarretar dificuldades na usabilidade das cotações.
            </p>
        </div>

        <div class="space-y-6 text-xs text-slate-600">
            <div>
                <h5 class="font-bold text-slate-800 text-[11px] uppercase mb-2">API Principal: Brapi</h5>
                <p class="mb-3">Para ativar o sistema, obtenha sua Chave no site oficial <a href="https://brapi.dev/" target="_blank" class="text-blue-600 underline">brapi.dev</a> através do botão <b>"Obter Chave API"</b>.</p>
                
                <!-- Ações de Teste -->
                <div class="border border-blue-100 rounded-lg p-4 bg-blue-50/30 mb-4">
                    <p class="font-bold text-blue-700 mb-2 underline">Ações de Teste com Acesso Irrestrito</p>
                    <p class="mb-2">Os ativos abaixo possuem acesso irrestrito para validação (PETR4, MGLU3, VALE3, ITUB4), permitindo requisições ilimitadas e dados em tempo real sem necessidade de autenticação inicial.</p>
                </div>

                <!-- Comparativo de Planos (Grade Visual) -->
                <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <p class="font-bold text-slate-700 mb-3 uppercase text-[10px]">Comparativo de Recursos e Limites Técnicas</p>
                    <div class="overflow-x-auto">
                        <table class="w-full text-[10px] text-left border-collapse">
                            <thead class="bg-slate-100"><tr class="border-b"><th class="py-2 px-1 uppercase">Recurso</th><th class="py-2 px-1 text-center">Gratuito</th><th class="py-2 px-1 text-center">Startup</th><th class="py-2 px-1 text-center">Pro</th></tr></thead>
                            <tbody>
                                <tr class="border-b"><td>Requisições/mês</td><td class="text-center">15.000</td><td class="text-center">150.000</td><td class="text-center">500.000</td></tr>
                                <tr class="border-b"><td>Ações por requisição</td><td class="text-center font-bold text-orange-600">1</td><td class="text-center">10</td><td class="text-center">20</td></tr>
                                <tr class="border-b"><td>Histórico de dados</td><td class="text-center">3 meses</td><td class="text-center">1 ano</td><td class="text-center text-blue-600 font-bold">Completo</td></tr>
                                <tr class="border-b"><td>Atraso (Delay)</td><td class="text-center">~30 min</td><td class="text-center">~15 min</td><td class="text-center text-green-600">~5 min</td></tr>
                                <tr class="border-b"><td>Dados de Dividendos</td><td class="text-center text-red-500">❌</td><td class="text-center text-green-500">✅</td><td class="text-center text-green-500">✅</td></tr>
                                <tr class="border-b"><td>Dados Fundamentalistas</td><td class="text-center">Básico</td><td class="text-center">Completo</td><td class="text-center">Completo</td></tr>
                                <tr><td>Suporte Prioritário</td><td class="text-center text-red-500">❌</td><td class="text-center text-green-500">✅</td><td class="text-center text-green-500">✅</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-3 space-y-2 text-[9px] text-slate-500 italic">
                        <p><b>*Nota 1:</b> O sistema gerencia a limitação de 1 ativo por chamada via processamento serial assíncrono.</p>
                        <p class="border-t pt-1"><b>*Nota 2:</b> Dados obtidos em 30/01/2026. As políticas comerciais são de inteira responsabilidade do parceiro API e podem ser alteradas sem aviso prévio.</p>
                    </div>
                </div>

                <div class="mt-4 flex justify-between text-[10px]">
                    <p>Suporte API: <a href="mailto:contato@brapi.dev" class="text-blue-600 underline">contato@brapi.dev</a></p>
                    <a href="https://brapi.dev/docs" target="_blank" class="text-blue-600 font-bold underline">Documentação Completa</a>
                </div>
            </div>

            <!-- HG Brasil -->
            <div class="pt-6 border-t border-slate-100">
                <h5 class="font-bold text-slate-800 text-[11px] uppercase mb-2">API de Contingência: HG Brasil</h5>
                <p class="mb-3 text-xs">Utilizada para garantir a continuidade das cotações atuais. Obtenha sua Key em <a href="https://hgbrasil.com" target="_blank" class="text-blue-600 underline">hgbrasil.com</a> na seção "Chaves de API" para o serviço "Finance".</p>
                <div class="flex justify-between text-[10px]">
                    <p>E-mail: <a href="mailto:contato@hgbrasil.com" class="text-blue-600 underline">contato@hgbrasil.com</a></p>
                    <a href="https://hgbrasil.com/status/finance" target="_blank" class="text-blue-600 font-bold underline">Status e Planos HG</a>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. POLÍTICA DE SUPORTE E RESPONSABILIDADE -->
    <section class="space-y-4">
        <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Política de Suporte e Responsabilidade Técnica</h4>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r text-[11px] text-blue-800">
            <b>Sistema Validado:</b> O L&S Tracker Pro é entregue plenamente funcional. Após a validação inicial, falhas de cotação decorrentes de mudanças nos parceiros API não são consideradas defeitos do software.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-tight">
            <ul class="space-y-2">
                <li>• <b>Prazos de Resposta:</b> Solicitações de suporte serão atendidas em até <b>7 dias corridos</b>.</li>
                <li>• <b>Manutenção de Bugs:</b> Erros entre as APIs e o sistema serão tratados com máximo empenho, embora o prazo de restabelecimento seja indefinido por depender de terceiros.</li>
            </ul>
            <ul class="space-y-2">
                <li>• <b>Materiais de Apoio:</b> Inclui documentação técnica e vídeos explicativos de operação.</li>
                <li>• <b>Limitações:</b> O suporte não abrange problemas de hardware ou bloqueios de navegadores do usuário.</li>
            </ul>
        </div>
    </section>

    <!-- 6. SEGURANÇA E LICENCIAMENTO -->
    <section class="space-y-3">
        <h4 class="font-bold text-slate-800 border-b pb-1 uppercase text-[10px] tracking-wider text-blue-600">Segurança de Auditoria e Licenciamento</h4>
        <div class="space-y-2 text-[12px]">
            <p><b>Exportação CSV:</b> O ícone no topo realiza o "Dump" completo da base histórica do Banco de Dados Local (IndexedDB).</p>
            <p><b>Integridade:</b> Cada arquivo é assinado digitalmente. Alterações no proprietário ou categoria de licença (Online/Offline) resultam no travamento das funções matemáticas.</p>
        </div>
    </section>

    <!-- 7. CANAIS DE ATENDIMENTO E VENDAS -->
    <section class="mt-8 pt-6 border-t-2 border-blue-100 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p class="font-bold text-slate-800 text-[11px] uppercase mb-3">Aquisição e Novas Licenças</p>
                <div class="flex flex-col gap-2 text-xs">
                    <a href="https://www.lstrackerpro.com.br" class="text-blue-600 font-bold hover:underline">🌐 Website Oficial</a>
                    <a href="https://vendas.lstrackerpro.com.br" class="text-blue-600 font-bold hover:underline">🛒 Loja Virtual</a>
                    <a href="https://www.instagram.com/seuperfil" class="text-pink-600 font-bold hover:underline">📸 Siga no Instagram</a>
                </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p class="font-bold text-slate-800 text-[11px] uppercase mb-3">Suporte Técnico (Exclusivo)</p>
                <div class="space-y-3 text-xs">
                    <div><p class="text-slate-400 text-[9px] font-bold uppercase">E-mail:</p><a href="mailto:suporte@lstrackerpro.com.br" class="text-slate-600 font-medium">suporte@lstrackerpro.com.br</a></div>
                    <a href="https://t.me/seulinktelegram" target="_blank" class="inline-flex items-center gap-2 bg-sky-500 text-white px-3 py-1.5 rounded-md font-bold text-[10px]">Acessar Canal do Telegram</a>
                </div>
            </div>
        </div>
        <div class="pt-8 pb-4 text-center">
            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">L&S Tracker Pro • Freedom through Statistics • v12.5.5</p>
        </div>
    </section>
`;